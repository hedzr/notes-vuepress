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
    "revision": "2622e5f87d99981ec6c32ff4f4781a8f"
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
    "url": "assets/js/19.7fe271f6.js",
    "revision": "824fc9944e99aecc9d1a9c5206539531"
  },
  {
    "url": "assets/js/20.6d5c6785.js",
    "revision": "4c5fba020ef768f50c8bdcccd44a768c"
  },
  {
    "url": "assets/js/21.f30313f5.js",
    "revision": "5a78eccbc2d29d260ccba152a7589515"
  },
  {
    "url": "assets/js/22.e9756615.js",
    "revision": "001a521cf02e22d5b86d97eed710ce01"
  },
  {
    "url": "assets/js/23.8ab9e978.js",
    "revision": "f8713f94cff662a68dc68f9d176165b1"
  },
  {
    "url": "assets/js/24.6c09b49d.js",
    "revision": "8ada1c1375baa91abb0309e412292bf4"
  },
  {
    "url": "assets/js/25.14c6b0e8.js",
    "revision": "a5b528d31215859c9a234456f17ad17c"
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
    "url": "assets/js/app.5fef007c.js",
    "revision": "df1a0bb11166072fe39b3844998e92d4"
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
    "revision": "9c9cbb70a9dffb08734f46ea458f4377"
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
    "revision": "b4c5b9ee8cbffb379f6a024fb6a023a2"
  },
  {
    "url": "notes-vuepress/faq.html",
    "revision": "a07278d4e63233a1675c037a5de6cba0"
  },
  {
    "url": "notes-vuepress/getting-started.html",
    "revision": "a62b06d14c89f977d88e94f712b2a273"
  },
  {
    "url": "notes-vuepress/index.html",
    "revision": "29a73b454bdbc7cac2823941a35ca5b4"
  },
  {
    "url": "notes-vuepress/markdown-demo.html",
    "revision": "7d378f31bb21015faebe996f0611305c"
  },
  {
    "url": "notes-vuepress/markdown-page.2.html",
    "revision": "0e22d75d47be428299addcd2840712a8"
  },
  {
    "url": "notes-vuepress/markdown-page.html",
    "revision": "10a3f6ae6a1bad7ce8e9f75be28d340a"
  },
  {
    "url": "notes-vuepress/ref.index.html",
    "revision": "77033b8a18b2787a9649d35997d17df8"
  },
  {
    "url": "notes-vuepress/ref.refs.html",
    "revision": "a63ea640c48f733fc7517415ce6f502c"
  },
  {
    "url": "notes-vuepress/refs.html",
    "revision": "99462617a6e2adcec7251eb5849f418c"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "zh/index.html",
    "revision": "f28d9d7f4c94d03c9dfdbcc5e9d2bbaa"
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
