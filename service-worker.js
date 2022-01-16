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
    "revision": "6d274f892c55d913e80db51ea0349a19"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.91be6cae.css",
    "revision": "01cdf2d5dba8ee1bf69b724961e8b2b6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6a888a06.js",
    "revision": "1ef896cd36cfd0cbd5581df29ab51d2f"
  },
  {
    "url": "assets/js/11.02aafab6.js",
    "revision": "efe7f52f12905c94b8eb18153c9930bb"
  },
  {
    "url": "assets/js/12.fb67559c.js",
    "revision": "6e09b44319cb9176301843a2ae63f204"
  },
  {
    "url": "assets/js/13.53145762.js",
    "revision": "d34d82efa65d2d1d353bc0897a80dc66"
  },
  {
    "url": "assets/js/14.6144d54d.js",
    "revision": "4fd58d3cee58cedbd0e37d6438868d95"
  },
  {
    "url": "assets/js/15.44561ba7.js",
    "revision": "18ef3258d6cdc41a7c007fc27327708c"
  },
  {
    "url": "assets/js/16.70c83ec8.js",
    "revision": "489ebe0bb59969f67ae6391017cc3547"
  },
  {
    "url": "assets/js/17.e54d3b4d.js",
    "revision": "5b1ff6c0a31c83b8d36a4577f0ad2082"
  },
  {
    "url": "assets/js/18.9f973613.js",
    "revision": "34b9f1d329c383f6fa72bffe7c26be72"
  },
  {
    "url": "assets/js/19.141c869c.js",
    "revision": "c6a1958acfc88c3a0135cff874a50f57"
  },
  {
    "url": "assets/js/20.ea4e1790.js",
    "revision": "f079a3576c1202de7414cd976805be0f"
  },
  {
    "url": "assets/js/21.c938aa84.js",
    "revision": "3750188cf0a893acf52635f36bc3b23c"
  },
  {
    "url": "assets/js/22.2d20cc86.js",
    "revision": "45f261a4ac43372aa2b74a62ee2f5637"
  },
  {
    "url": "assets/js/23.7e429ead.js",
    "revision": "c0e8282c3817018405033d1839efb20d"
  },
  {
    "url": "assets/js/24.17716eb3.js",
    "revision": "d515b78d3cb6b6fccf53ef4507c08c61"
  },
  {
    "url": "assets/js/25.dcb03e1a.js",
    "revision": "ea995ed842fc4f43007b4915f2009139"
  },
  {
    "url": "assets/js/26.00299c0b.js",
    "revision": "6e4c2c1e46753091a5db4aa1d4a6cc8e"
  },
  {
    "url": "assets/js/27.cfea3521.js",
    "revision": "70ae87ab43d3642cb7bf6d54040576c2"
  },
  {
    "url": "assets/js/28.9f2d57fe.js",
    "revision": "6a0f9f826abff67620d738b47e1208aa"
  },
  {
    "url": "assets/js/29.d95b4e72.js",
    "revision": "9c2bba43464188c61b5d25349ac984ea"
  },
  {
    "url": "assets/js/4.261f3d37.js",
    "revision": "cdd8ab74adaaf7f07ca12a4b16109c79"
  },
  {
    "url": "assets/js/5.ffc7e2b2.js",
    "revision": "9c7cf546164dd6298cf860639ffbc057"
  },
  {
    "url": "assets/js/6.e12b6efb.js",
    "revision": "728e78f0c3505bdb8cad9fff7a87c712"
  },
  {
    "url": "assets/js/7.30efbbaa.js",
    "revision": "b52ff13517092a0921d8a65971a9feba"
  },
  {
    "url": "assets/js/8.9ca33fa4.js",
    "revision": "28c0fd06bf209691a30077f0ec830156"
  },
  {
    "url": "assets/js/9.ec520b42.js",
    "revision": "c2686f540cadcb016e9378bb560ab7e6"
  },
  {
    "url": "assets/js/app.814f5112.js",
    "revision": "69895c58022c880ec6eb04d2a2b3ca05"
  },
  {
    "url": "assets/js/vendors~flowchart.afed771c.js",
    "revision": "d8041508a59c7be08b381a9011fed968"
  },
  {
    "url": "assets/js/vendors~notification.8ec48a6d.js",
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
    "revision": "80f54c9c87f16fe4c0acdbf9afeaceb1"
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
    "revision": "0949f54d0351f2f18e771de15078afa3"
  },
  {
    "url": "notes-vuepress/faq.html",
    "revision": "4e099c9d625774f88c77791d1c50e997"
  },
  {
    "url": "notes-vuepress/getting-started.html",
    "revision": "ae8f40287cab46b67abdddba6efb3930"
  },
  {
    "url": "notes-vuepress/index.html",
    "revision": "93053322688c127eb9907542a5ddd8ac"
  },
  {
    "url": "notes-vuepress/markdown-demo.html",
    "revision": "e2f7fa91ed409825fd97fe8a50a2f190"
  },
  {
    "url": "notes-vuepress/markdown-page.2.html",
    "revision": "12dd592a43c89fd3ac530d3db3f30145"
  },
  {
    "url": "notes-vuepress/markdown-page.html",
    "revision": "6245ea94b8a9f2e207c9412e34ad1a4f"
  },
  {
    "url": "notes-vuepress/ref.index.html",
    "revision": "79a821e5d6e58098c0b7d6efd6837137"
  },
  {
    "url": "notes-vuepress/ref.refs.html",
    "revision": "4fd31ab24229b2ee2a937db8a2d400ef"
  },
  {
    "url": "notes-vuepress/refs.html",
    "revision": "7813b84a177ee6ea1100d92db2044cc8"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "zh/index.html",
    "revision": "276d7bfdd2c58f0db0212995501b5759"
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
