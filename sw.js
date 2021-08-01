const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"zhix.co"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"b8f6ab13b12f416abf5d3130db8102fe",url:"./404.html"},{revision:"c9ed1964ac33168098f4be533937faa7",url:"./about/index.html"},{revision:"8125276b329204297a52ca18e8008651",url:"./categories/index.html"},{revision:"be6572559d7f380a72bbd053a2dbcff6",url:"./categories/技术/index.html"},{revision:"798e9eb5bd9db59f40dc86156422d36e",url:"./categories/设计/index.html"},{revision:"8c1dd5c4209e185be63a1e493db7000a",url:"./css/meme.min.css"},{revision:"8d2a4fd8cbf836428792bdd7f92af172",url:"./fonts/glyph-correction.woff2"},{revision:"3eacd63796de4b39bc102dae7b143ca5",url:"./fonts/JetBrainsMono-Regular.woff2"},{revision:"5e8d059695d8b3fa14b971fab20ad759",url:"./index.html"},{revision:"24964a2f674369fee6930d2862eb95c5",url:"./js/meme.min.js"},{revision:"800846cf0ea80c4b7cf2828d02fa1eff",url:"./manifest.json"},{revision:"1c9a1fbb21b1fed60888acbeb9b0314b",url:"./page/1/index.html"},{revision:"0b2375ee90930ad6f83d8feed0152dce",url:"./page/2/index.html"},{revision:"63816e15d885b442bdc0e8915b262b8b",url:"./posts/index.html"},{revision:"abf3abaa4564ba97f8ae2c5261f866e9",url:"./posts/providing-scripting-support-for-your-api/index.html"},{revision:"846b32e429277eedf4edc5b858a6cecd",url:"./posts/setup-continuous-build-to-hugo-with-buddy/index.html"},{revision:"7dbb7d77b88ca3aa2b82f9c35078fd4a",url:"./posts/solving-planing-problem-by-genetic-algorithm/index.html"},{revision:"9f89ad3df73fadbfe47462bfefc51944",url:"./posts/spring-cache-in-practice-adding-memory-cache-in-front-of-redis-cache/index.html"},{revision:"fb05fc4d556bd439a86ea367b9c60432",url:"./posts/spring-factories-and-jdk-spi-mechanism/index.html"},{revision:"9ec0fab9360480d7702b9f375777d29c",url:"./posts/talking-spi-in-java/index.html"},{revision:"cc1353d12663836e24cc3560d4a0d73c",url:"./posts/talking-typesetting/index.html"},{revision:"4b5e57133d0eacdcdf59e7790fc97b13",url:"./search.json"},{revision:"39292dd9a117eee32576616b1b9ce7f4",url:"./series/index.html"},{revision:"86b8bba929e5a6de6119e9a6db6efde9",url:"./series/java-核心/index.html"},{revision:"806a486f7fa899ac8fb40195f97630f2",url:"./series/spring-framework/index.html"},{revision:"76d94cf6c73286c06340ab426ec191db",url:"./series/博客搭建/index.html"},{revision:"9458f153c355742d24fb21629776aca3",url:"./series/排版学/index.html"},{revision:"0e380b250641132f1f7656955c73653e",url:"./tags/api/index.html"},{revision:"42e22da8529b4bc924b246744af8f3c0",url:"./tags/baeldung/index.html"},{revision:"85534766da0d74c12d08ee608ec70445",url:"./tags/buddy/index.html"},{revision:"15ae89b73ad693b714a907c5df92bff5",url:"./tags/cache/index.html"},{revision:"93bd3a4dbd802c62a8327b8a66f29f19",url:"./tags/cloudflare/index.html"},{revision:"20979e2476d3455e1925f6141b05aef7",url:"./tags/css/index.html"},{revision:"202a9b6b9d760ca4fb135ab9b57a7f65",url:"./tags/docker/index.html"},{revision:"c956df5ea77d3c80c72e242b49950580",url:"./tags/hugo/index.html"},{revision:"bcc7e8fc6158545b5ba2f9c903ea1c28",url:"./tags/index.html"},{revision:"b8f6553369e6067a25702167f2c7f1c9",url:"./tags/java/index.html"},{revision:"5f579e493f2a92b6c37dea52e2873e2a",url:"./tags/jdk/index.html"},{revision:"0fcc84f9aa5bb3642710d13c7b7686ab",url:"./tags/markdown/index.html"},{revision:"f81dbb90c17d438230b7939c11d0b495",url:"./tags/redis/index.html"},{revision:"2e3ecff146bd889bf7d38ee98ef0c5d7",url:"./tags/restful/index.html"},{revision:"5d6d808e9b07c8c68b7c222f1528f3ce",url:"./tags/scripting/index.html"},{revision:"ed5dffa1fb3ada4db7c7c7a7c798b427",url:"./tags/spi/index.html"},{revision:"52b572a5f08af19740f57b9a53573d2f",url:"./tags/spring-boot/index.html"},{revision:"d008f4c5eb6fc78cd15283bf9176b6fd",url:"./tags/spring-cache/index.html"},{revision:"0154273a0352364b97db53fb70785d54",url:"./tags/spring-framework/index.html"},{revision:"546ab0fd64ec26df4508cf54a5fa069c",url:"./tags/spring-mvc/index.html"},{revision:"4388f0d16abf94385200ac69ad58a9f9",url:"./tags/unicode/index.html"},{revision:"bdde65563f2afe48f3d4c2fa6320466f",url:"./tags/utf-8/index.html"},{revision:"3c2440dfe2bb66544425f82e92ac9224",url:"./tags/人工智能/index.html"},{revision:"168f2de14ffcca97761d97f3f64d99fe",url:"./tags/公众号/index.html"},{revision:"37153499a4ed05de1a182a7f32cc980f",url:"./tags/博客/index.html"},{revision:"f8277bc27e122c1890cab90da3744ca0",url:"./tags/启发式搜索/index.html"},{revision:"4300925693d49e7925d9c2cce3da5034",url:"./tags/字体/index.html"},{revision:"8dab02bce2d882655ac2899a2196f7cb",url:"./tags/字符集/index.html"},{revision:"c7058e3707d33783a7df7ef6b92896f6",url:"./tags/持续部署/index.html"},{revision:"f84c3e4ae135fefa3107067a6cc867f1",url:"./tags/排版/index.html"},{revision:"ca6e12218fd26af513c91a90a6af68bf",url:"./tags/算法/index.html"},{revision:"9fe8cbb2644b5931300a776863912f2e",url:"./tags/缓存/index.html"},{revision:"b31f42b8b3580f7be269129dcd58a786",url:"./tags/编程/index.html"},{revision:"0064623c5845042935967e4bcdba86ab",url:"./tags/脚本引擎/index.html"},{revision:"7a983773fc816c235fdcc9da5934eac6",url:"./tags/设计/index.html"},{revision:"8958005a911c9dc65c6f3fa527caa0fe",url:"./tags/软件工程/index.html"},{revision:"df6da803c9b33e60f4826ee3d2f21f2d",url:"./tags/遗传算法/index.html"},{revision:"8377b6f013ffdb16e87edaeccc8d70ea",url:"./tags/面向对象/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:mp4|webm|ogg)$/,new workbox.strategies.CacheFirst({cacheName:"videos",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[200]}),new workbox.rangeRequests.RangeRequestsPlugin]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();