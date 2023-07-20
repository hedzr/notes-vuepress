/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4aa10b43bc9113dce0cd954e396e73b0"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.db2884ee.css",
    "revision": "01cdf2d5dba8ee1bf69b724961e8b2b6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f33a5888.js",
    "revision": "1ef896cd36cfd0cbd5581df29ab51d2f"
  },
  {
    "url": "assets/js/11.e6b1f16f.js",
    "revision": "efe7f52f12905c94b8eb18153c9930bb"
  },
  {
    "url": "assets/js/12.9b31a257.js",
    "revision": "6e09b44319cb9176301843a2ae63f204"
  },
  {
    "url": "assets/js/13.1ca5aec2.js",
    "revision": "d34d82efa65d2d1d353bc0897a80dc66"
  },
  {
    "url": "assets/js/14.629d71c1.js",
    "revision": "4fd58d3cee58cedbd0e37d6438868d95"
  },
  {
    "url": "assets/js/15.a17307ec.js",
    "revision": "18ef3258d6cdc41a7c007fc27327708c"
  },
  {
    "url": "assets/js/16.eecc2f1f.js",
    "revision": "489ebe0bb59969f67ae6391017cc3547"
  },
  {
    "url": "assets/js/17.7f2a6b5f.js",
    "revision": "5b1ff6c0a31c83b8d36a4577f0ad2082"
  },
  {
    "url": "assets/js/18.ab890417.js",
    "revision": "fe00a3c3ffab83360b6aafc40db839bc"
  },
  {
    "url": "assets/js/19.1f7a3695.js",
    "revision": "e8ecb0b47d3b67734a9d207250208d8a"
  },
  {
    "url": "assets/js/20.a6f70741.js",
    "revision": "f079a3576c1202de7414cd976805be0f"
  },
  {
    "url": "assets/js/21.f30313f5.js",
    "revision": "5a78eccbc2d29d260ccba152a7589515"
  },
  {
    "url": "assets/js/22.b5a7b0b4.js",
    "revision": "0d87d1f6a8ab10aab487da95f3d45ff8"
  },
  {
    "url": "assets/js/23.6d1c5d16.js",
    "revision": "65b18ca677e553b3b16c02162c40283d"
  },
  {
    "url": "assets/js/24.665d2d0b.js",
    "revision": "ec42c7c20f47031b63c79359c2b4dcd1"
  },
  {
    "url": "assets/js/25.8bc55a99.js",
    "revision": "59687d0b3d184ae0ed3f1e5ba604723d"
  },
  {
    "url": "assets/js/26.dbbb5f00.js",
    "revision": "4eefa05334b5e1810bd3035c8c700c74"
  },
  {
    "url": "assets/js/27.873b10c8.js",
    "revision": "4e5dad6852ad5b14f8f271de6342124f"
  },
  {
    "url": "assets/js/28.66e610e2.js",
    "revision": "0062bb737faee4cc6314188a6808e726"
  },
  {
    "url": "assets/js/29.6bcb3a10.js",
    "revision": "9c2bba43464188c61b5d25349ac984ea"
  },
  {
    "url": "assets/js/4.8fd9267e.js",
    "revision": "cdd8ab74adaaf7f07ca12a4b16109c79"
  },
  {
    "url": "assets/js/5.de8e5a6f.js",
    "revision": "9c7cf546164dd6298cf860639ffbc057"
  },
  {
    "url": "assets/js/6.ff29802d.js",
    "revision": "728e78f0c3505bdb8cad9fff7a87c712"
  },
  {
    "url": "assets/js/7.f6691380.js",
    "revision": "b52ff13517092a0921d8a65971a9feba"
  },
  {
    "url": "assets/js/8.bd7181aa.js",
    "revision": "28c0fd06bf209691a30077f0ec830156"
  },
  {
    "url": "assets/js/9.d3281a93.js",
    "revision": "c2686f540cadcb016e9378bb560ab7e6"
  },
  {
    "url": "assets/js/app.c9acb620.js",
    "revision": "7f011a55d24d7e0d13be0a149f8d74fe"
  },
  {
    "url": "assets/js/vendors~flowchart.8f2df959.js",
    "revision": "d8041508a59c7be08b381a9011fed968"
  },
  {
    "url": "assets/js/vendors~notification.fdd6e850.js",
    "revision": "8c5292ddd31a027ce1a72eef945787f5"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "a01076c0af57fb667bbbd57825f312a0"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "140057bc485c25b6cbb463f91a556107"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "2b7eb54575dc1a9c4074eaa3c8826593"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d76d18e659da492eaa827df545423453"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "233f8f1f547c8e48da48683636facc0b"
  },
  {
    "url": "icons/logo.png",
    "revision": "2b7eb54575dc1a9c4074eaa3c8826593"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "2b6563077164f2690146428d1f5f1d00"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "2b7eb54575dc1a9c4074eaa3c8826593"
  },
  {
    "url": "notes-vuepress/book/index.html",
    "revision": "7acbb186f8a85f1149e490bc11b885ae"
  },
  {
    "url": "notes-vuepress/faq.html",
    "revision": "b63fd291417d36bbd0eaaa6d38dcd0f2"
  },
  {
    "url": "notes-vuepress/getting-started.html",
    "revision": "27d2aa5d1391f7130b95ee5846c113be"
  },
  {
    "url": "notes-vuepress/index.html",
    "revision": "21133c55283d3b39782a3e14024012e7"
  },
  {
    "url": "notes-vuepress/markdown-demo.html",
    "revision": "f66bc49c8d01c9934d65b5e710fc391a"
  },
  {
    "url": "notes-vuepress/markdown-page.2.html",
    "revision": "eebc39fca07846c617b02c49ed7ce93a"
  },
  {
    "url": "notes-vuepress/markdown-page.html",
    "revision": "721fd6863ad19c6c5b9af773bf4e6b1a"
  },
  {
    "url": "notes-vuepress/ref.index.html",
    "revision": "5fb4ca6de23fcdb73567be4bb4dc7c9f"
  },
  {
    "url": "notes-vuepress/ref.refs.html",
    "revision": "79a6c511abe99d4e438a469b9088c356"
  },
  {
    "url": "notes-vuepress/refs.html",
    "revision": "64b52ed45f745b51b7b60bf4a306a500"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "zh/index.html",
    "revision": "89b159155b1bc60df111ed546e64a0ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
