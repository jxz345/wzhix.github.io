const workboxVersion="5.0.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"zhix.co"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"930f22b4ec4409e2462b04d0755beb60",url:"./404.html"},{revision:"c51dcd433483a0d17b20791381fb3707",url:"./about/index.html"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./assets/js/custom.js"},{revision:"0f6fb3c1943ebebc67e906e0f9cf6777",url:"./categories/index.html"},{revision:"76587b0ea89f5e128138505d8129c50f",url:"./categories/技术/index.html"},{revision:"664c9f4191e120030aa273155deb25f8",url:"./categories/设计/index.html"},{revision:"0c1461f41a1311a12072e8b3c99afc50",url:"./css/meme.min.css"},{revision:"8d2a4fd8cbf836428792bdd7f92af172",url:"./fonts/glyph-correction.woff2"},{revision:"a032d24b3c4081cc2f016b8ddc7f2cde",url:"./gulpfile.js"},{revision:"743e808a4c24f8af8b7fb2cfbcf89431",url:"./index.html"},{revision:"d28ac509e70825fd4008ee546165d78a",url:"./js/meme.min.js"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./layouts/partials/custom/script.html"},{revision:"071fdd287b6df56611c0e5ed537ab426",url:"./layouts/shortcodes/en.html"},{revision:"dade1c3ab31aa3a1cc37fa6621c13d1d",url:"./layouts/shortcodes/notice.html"},{revision:"f9291a3006e92cde758560c227d585e4",url:"./layouts/shortcodes/q.html"},{revision:"7ec0eb11ee3085ce6896e0ae0b201adb",url:"./layouts/shortcodes/tab.html"},{revision:"27fab639e010e6707feab8c6a28120a1",url:"./layouts/shortcodes/tabs.html"},{revision:"800846cf0ea80c4b7cf2828d02fa1eff",url:"./manifest.json"},{revision:"0ea18ea4fc2e6e26a65de72a70bbc559",url:"./package-lock.json"},{revision:"89c595a7e10703f8e432330b182a8230",url:"./package.json"},{revision:"1c9a1fbb21b1fed60888acbeb9b0314b",url:"./page/1/index.html"},{revision:"cbc2abacf3fafe97306fa8194b0b76c0",url:"./page/2/index.html"},{revision:"5b13f86322f22e33d30e12bb4f86a3ab",url:"./posts/index.html"},{revision:"05b8b721d4ef56cd86d5f09c8eda812f",url:"./posts/providing-scripting-support-for-your-api/index.html"},{revision:"15bfbd56ae93ecc5883a620b7b2211b4",url:"./posts/setup-continuous-build-to-hugo-with-buddy/index.html"},{revision:"251c96526a6c776cd0027e337065871e",url:"./posts/solving-planing-problem-by-genetic-algorithm/index.html"},{revision:"5688d5f4a4087efd6352eedfd1c09551",url:"./posts/spring-cache-in-practice-adding-memory-cache-in-front-of-redis-cache/index.html"},{revision:"a48d789384161d5bf608072ce588d844",url:"./posts/spring-factories-and-jdk-spi-mechanism/index.html"},{revision:"7b37e0de14f0f9fa212e74aca778f700",url:"./posts/talking-spi-in-java/index.html"},{revision:"3a8ca6962c6e10487fc10c42b7452c19",url:"./posts/talking-typesetting/index.html"},{revision:"4b5e57133d0eacdcdf59e7790fc97b13",url:"./search.json"},{revision:"823df2fbe2d027f6fab5e6af9e478fb9",url:"./series/index.html"},{revision:"7b6a275b6f8dd14d6e9dc7c7fc4a7a76",url:"./series/java-核心/index.html"},{revision:"5e352c6bef099c6ba1bde3e4a63ffc6c",url:"./series/spring-framework/index.html"},{revision:"047c37684785710e652975b0bebe5cd4",url:"./series/博客搭建/index.html"},{revision:"2166d33d4b98e8975c2c10cf9d700fc2",url:"./series/排版学/index.html"},{revision:"800846cf0ea80c4b7cf2828d02fa1eff",url:"./static/manifest.json"},{revision:"a3c37f6bf7ac695e1a923dcca8a03009",url:"./sw-template.js"},{revision:"bab57c73991b67c1ff02e4de57af1d40",url:"./tags/api/index.html"},{revision:"68a675d6a1b52da57d1f240f270a5ae0",url:"./tags/baeldung/index.html"},{revision:"d9dcdf0405409a6d23329fe5216ecc89",url:"./tags/buddy/index.html"},{revision:"4e8d5f833f9fd300ba49e6ec70d28af5",url:"./tags/cache/index.html"},{revision:"9ac7dcbbb704f5a1472a86cb4a73331b",url:"./tags/cloudflare/index.html"},{revision:"346d37184e072e77fd4c8dddebbd9a52",url:"./tags/css/index.html"},{revision:"e6a09026bc586cc39b3c6d65076c31e8",url:"./tags/docker/index.html"},{revision:"e43a7ddbfd2955a47eda642b350e0717",url:"./tags/hugo/index.html"},{revision:"f9a093d889cc0f09955bc3839dc25999",url:"./tags/index.html"},{revision:"2e1ce09803d0d48fa4a1bd13a0c539c8",url:"./tags/java/index.html"},{revision:"5bd2efe2507c11e12c4efb0a213e7158",url:"./tags/jdk/index.html"},{revision:"c2f7204cc6b67caa9ac46cce71db21ce",url:"./tags/markdown/index.html"},{revision:"e99f52ba2347669a449f4e057b18a4cd",url:"./tags/redis/index.html"},{revision:"ea916a9bf8339cd013b8c78a6d1eb266",url:"./tags/restful/index.html"},{revision:"8cf944b815a76db4b81f9bb4354da387",url:"./tags/scripting/index.html"},{revision:"25a51ccbc6c73ccc3a59d6294304124d",url:"./tags/spi/index.html"},{revision:"298a57ef58f39c7ed729ddf093a2aa6a",url:"./tags/spring-boot/index.html"},{revision:"f9fcc6fd9afe7e39a4c2aba9986236b2",url:"./tags/spring-cache/index.html"},{revision:"beec19e1a566a0c3ea61d92f492c8337",url:"./tags/spring-framework/index.html"},{revision:"27482f895652c217a3b8788bfa12b9f0",url:"./tags/spring-mvc/index.html"},{revision:"db2d0620be090091636cbbabbc8edfd4",url:"./tags/unicode/index.html"},{revision:"b77e04e92f81ad0474f20a55a1aa2326",url:"./tags/utf-8/index.html"},{revision:"a944acdaf755af8f141aeca9cfc1c3a5",url:"./tags/人工智能/index.html"},{revision:"1e20ea2c273cd5cd3a5b489d3aa4f5ba",url:"./tags/公众号/index.html"},{revision:"340c9010843db241a7193f47cb5adf66",url:"./tags/博客/index.html"},{revision:"7069ca3ffaa28ba34912819fbd86aa44",url:"./tags/启发式搜索/index.html"},{revision:"ae90c1ff321eb4bb7e9a5d9c6b112339",url:"./tags/字体/index.html"},{revision:"634ef8ef780ef3ead066aabc4d72d856",url:"./tags/字符集/index.html"},{revision:"577d60f27af878aedc6efd7c17d980b0",url:"./tags/持续部署/index.html"},{revision:"4485ea4f5ef5e8ff941dee2d41a00a18",url:"./tags/排版/index.html"},{revision:"ba5ca314b4f8341fb5f88b14192be478",url:"./tags/算法/index.html"},{revision:"9f1f90dd0f03d9e0776ada08bc5c6eef",url:"./tags/缓存/index.html"},{revision:"54337519072c7f87b8711d4ab7133bb2",url:"./tags/编程/index.html"},{revision:"848edce54043bef895fb4a3c0c4eac2c",url:"./tags/脚本引擎/index.html"},{revision:"95df14a9bbffc48f60f7d012d67ebd27",url:"./tags/设计/index.html"},{revision:"3cb791f7b6a6f4218b633180eb3d66d2",url:"./tags/软件工程/index.html"},{revision:"0e3a69ca08f4a89527ab103c207ff573",url:"./tags/遗传算法/index.html"},{revision:"90c3215553cf1d0b937e9d748a00a966",url:"./tags/面向对象/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:mp4|webm|ogg)$/,new workbox.strategies.CacheFirst({cacheName:"videos",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[200]}),new workbox.rangeRequests.RangeRequestsPlugin]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();