const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "hao-auriel-top"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"e7ea303e92732255aabd108db2b06efa","url":"./404.html"},{"revision":"b293da6d060d1e3e684412b211719cb6","url":"./assets/css/404.css"},{"revision":"b25a47c3709932d694bd0f11f99ca45f","url":"./assets/css/iconfont.css"},{"revision":"5fdd9ffa29ef2f2c56da910688040625","url":"./assets/css/onlinewebfonts.css"},{"revision":"e152795f2a1ac91adbe400f2024204e5","url":"./assets/css/vno.css"},{"revision":"378087a64e1394fc51f300bb9c11878c","url":"./assets/js/jquery.min.js"},{"revision":"0fd6baad13df879812877a3da85932fd","url":"./assets/js/main.js"},{"revision":"75ba6f4e2b2743a6b87ffdfaa100aed2","url":"./css/animation.css"},{"revision":"10350476b50d282394cd3b8781f1f0f4","url":"./css/font.css"},{"revision":"eb8832f301eccc422130613617664f42","url":"./css/loading.css"},{"revision":"b9db7b62cd68263aeb25c5c145809aee","url":"./css/mobile.css"},{"revision":"a0336499ba4726f496cb675ae262244a","url":"./css/style.css"},{"revision":"700aed8ebf153fbb1bf47b19f3539053","url":"./font/iconfont.woff2"},{"revision":"fa85ff069c6699f2f874cff557e885b3","url":"./font/MiSans-Regular.subset.woff2"},{"revision":"a68f41975f9d72eb7a46df2db1f84220","url":"./gulpfile.js"},{"revision":"f017dabb42643219534d491ff8047b31","url":"./index.html"},{"revision":"b4fea5460eedc04c3dde40ee17713d57","url":"./js/js.cookie.js"},{"revision":"73db8cb73243c2907e4d1375f3f8402b","url":"./js/main.js"},{"revision":"32747c6266450c893de996e2c4465267","url":"./js/set.js"},{"revision":"e8e09aa1d56c7e329af95585a49eb8fb","url":"./package-lock.json"},{"revision":"aa623d67639317e18091924d335ee948","url":"./package.json"}]);

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);
8
// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// External Images
workbox.routing.registerRoute(
    /^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,
    new workbox.strategies.CacheFirst({
        cacheName: "external-images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();