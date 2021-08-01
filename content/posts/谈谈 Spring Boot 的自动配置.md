---
title: "谈谈 Spring Boot 的自动配置"
date: 2020-02-15T19:05:32+08:00
categories: ["技术"]
slug: "spring-factories-and-jdk-spi-mechanism"
tags: ["Java", "编程", "软件工程", "Spring Framework", "Spring Boot", "JDK"]
draft: true
---

Spring Boot 的 EnableAutoConfiguration 注解提供了自动发现和加载配置的能力，赋予了应用程序强大的可扩展性，该特性依赖于 SpringFactoryLoader 在 CLASSPATH 中寻找并解析 META-INF 目录下的 spring.factories 文件，这种做法延伸于 JDK 6.0 引入的 <span lang="en">Service Provider Interface</span> 机制，该机制的目的则是简化可扩展应用程序的设计和代码解耦。

## 可扩展应用程序

[可扩展的应用程序](https://docs.oracle.com/javase/tutorial/ext/basics/spi.html) 即在不修改源代码的情况下，原程序可通过某种方式的处理以实现功能的伸缩和特性的增减，所谓的可扩展通常表现为支持插件或者模块子系统。因此，这类应用程序的使用者除了最终用户以外，还有第三方开发商。对于 Java 程序而言，这样的可扩展通常表现为「提供对外的 API 调用」、「在 CLASSPATH 引入 JAR 依赖」、「在 [META-INF](https://docs.oracle.com/javase/8/docs/technotes/guides/jar/jar.html) 目录下做配置」或者「在特定目录下放入插件文件」等方式，各个表现方式和它们对应的示例如下表所示：

表现形式 | 举例
:--- | :---
应用程序提供 API 调用 | Netty 对特定 Channel 的 Pipeline 处理
CLASSPATH 引入 JAR 依赖 | Spring Boot 配置自动发现
META-INF 目录下配置文件 | JDK 的 SPI 机制、Spring Factory 机制
特定目录下放入插件文件 | IntelliJ IDEA 插件管理、游戏 MOD 管理

以游戏中的 MOD 管理为例，游戏团队并不能在编译期确定所有 MOD 列表，具体的 MOD 由第三方开发者在运行时实现。对于游戏团队来说，需要制定一个统一的 MOD 接入规范，并在程序启动时，以配置文件或者自动扫描的方式发现并初始化所有 MOD，而第三方开发者通过开发新的 MOD 来扩展原游戏的功能或改变原游戏的行为，因而那些支持 MOD 的游戏通常会表现出极强的可扩展性。

可以看出，设计可扩展的应用程序的核心思想是解耦，即服务调用方不关心实现方的具体实现，也不用在代码中引入任何实现方的具体类。

### META-INF 目录

META-INF 从字面意义上理解就是元信息，对于 META-INF 目录，Oracle 的 [文档](https://docs.oracle.com/javase/7/docs/technotes/guides/jar/jar.html) 有如下的描述：

> {{% en %}}In many cases, JAR files are not just simple archives of java classes files and/or resources. They are used as building blocks for applications and extensions. The META-INF directory, if it exists, is used to store package and extension configuration data, including security, versioning, extension and services.{{% /en %}}
>
> 以配置文件或者自动扫描的方式发现并初始化所有 MOD，而第三方开发者通过开发新的 MOD 来扩展原游戏的功能或改变原游戏的行为，因而那些支持 MOD 的游戏通常会表现出极强的可扩展性。

即虽然 JAR 文件在内容上打包了 CLASS 和资源文件，但随着 Java 技术的发展，JAR 也逐渐成为了应用程序的扩展模块，而配置数据正是放在该目录下。所以 META-INF 目录本质上来说是一个对 JAR 文件有特殊意义的目录，里面存放了一些特殊的数据，比如扩展配置、签名数据等。

META-INF 目录的读取在很多框架中都有涉及，比如 Spring Framework、Dubbo、携程的 Apollo。我们也可以在该目录下设置自己的元信息格式，甚至都不强制一定在 META-INF 目录下，只是一般约定会将元信息统一放在一个文件夹下，实际上 JAR 文件中的资源都可以通过如下方式读取：

```java
URL resourceUrl
  = ClassLoader.getSystemClassLoader().getResource("<resource-name>");
URL metaInfResourceUrl
  = ClassLoader.getSystemClassLoader().getResource("META-INF/<resource-name>");
```

## Java 中的 SPI 机制

[Service Provider Interface](https://en.wikipedia.org/wiki/Service_provider_interface) 在 JDK 6.0 之后引入，旨在简化可扩展应用程序的设计，通过 SPI 机制，开发者可以更为方便地为应用程序创建可替换的模组。SPI 的本质是自动发现和装载特定接口的实现类，它解决了接口的「运行时实现」和「运行时实现的自动发现」问题。

## Service Loader

SPI 的核心是 ServiceLoader 类，它被声明为 final 的，提供一个惰性加载的 load 方法：

```java
package java.util;

public final class ServiceLoader<S> implements Iterable<S> {
  
  public static <S> ServiceLoader<S> load(Class<S> service, ClassLoader loader)
}
```

其中，service 参数定义了需要被加载的接口或者抽象类的 Class 对象，loader 参数则指定了加载使用的加载器。

### JDK 中 SPI 的应用

JDK 的很多内置模块和应用都使用了 SPI 机制，比如：

`java.sql.Driver`
: JDBC API 在 4.0 版本之后使用 SPI 加载数据库驱动程序（4.0 版本之前使用 Class.forName("<driver-fqn>")）。

`java.nio.charset.CharsetProvider`
: JDK 中的字符集使用 SPI 加载所有 CharsetProvider 的实现类。

一些第三方程序和框架也大量使用：

`org.slf4j.ILoggerFactory`
: SLF4J 中定义的日志器工厂类，使用 SPI 在运行时发现可用的实现。

除此之外，在货币、本地化、日期时间的处理也是基于 SPI 实现，相应的，我们也可以使用 SPI 对 JDK 扩展我们自己的本地化或日期时间实现。

### SPI 约定

根据 ServiceLoader的 JavaDoc 文档描述，若要使用 SPI 对应用程序进行扩展，需要遵循以下几个约定：

1. 在应用程序 CLASSPATH 下存在 META-INF/services 目录；
2. 对每一个需要被实现的接口或抽象类，用其完全限定名为文件名称创建文本文件，文件的编码格式必须为 UTF-8；
3. 文件每一行的内容为实现类的完全限定名。

以 JDBC 中的驱动程序 java.sql.Driver 为例，若我们打算在 JDK 注册自己的 JDBC 驱动实现，我们需要在 META-INF/services 目录下创建名为 java.sql.Driver 的文本文件，并确保编码格式为 UTF-8，并在文件中写入一行：

```
resources/
└── META-INF/
    └── services/
        └── java.sql.Driver
```

并在文件 java.sql.Driver 中写入如下一行：

```java
your.package.DriverImpl
```

至此，我们可以在应用程序中安全地调用如下代码：

```java
ServiceLoader<Driver> driverServiceSSSSSSSSSiverS
```

### 实战基于 SPI 的字符集扩展

下面以对 java.nio.charset.Charset 的字符集扩展来实践 SPI 在日常开发中的使用：假设你设计了下一代的 UTF-8 字符编解码实现版本，并为该实现版本取名为 UTF-8-NG，你需要赶在下一版 JDK 公布之前，将这一版本接入到自己的应用程序中，并保证在你的应用程序 API 分发后，其他开发人员可以使用如下代码消费你的 UTF-8 实现：

```java
import java.nio.Charset;

Charset yourCharsetImpl = Charset.forName("utf-8-ng");
```

在通常情况下，上述代码会因为找不到对应的字符集而抛出 java.nio.charset.UnsupportedCharsetException 异常。 在 JDK 中，对字符集的管理是通过 java.nio.charset.spi.CharsetProvider 进行，它的基本定义如下：

```java
public abstract class CharsetProvider {

  // 获得所有受该字符集提供者所管理的字符集集合的迭代器对象
  public abstract Iterator<Charset> charsets();
  
  // 在该字符集提供者所管理的字符集集合根据名称查找字符集对象
  public abstract Charset charsetForName(String charsetName);
}
```

这是一个典型的 SPI 接口，不同的 JDK vendor 有不同的实现，在截至本文完成时，Oracle JDK 中对应的实现是 sun.nio.cs.StandardCharsets，该类作为字符集管理的一个入口类，与之相伴的是其他由 Oracle 实现的具体字符集类。

## Spring Framework 中的 spring.factories 文件

## EnableAutoConfiguration 注解

注解类 EnableAutoConfiguration 在 Spring Boot 中承担两个作用：「是否在被注解的包行启用配置自动发现机制」和「其完全限定名作为 META-INF/spring.factories 中的键来配置自动发现」。

Spring Boot 的配置自动发现机制是以 Spring SPI 为基础实现的，Spring Boot 约定了自动发现的配置键在 META-INF/spring.factories 文件中的键为 org.springframwork.boot.autoconfigure.EnableAutoConfiguration，即启用自动发现的注解类 EnableAutoConfiguration 的完全限定名。