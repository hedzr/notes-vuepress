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
    "revision": "5ded6fe637a4cf07284b3027a89cc383"
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
    "url": "assets/js/18.a8166f3e.js",
    "revision": "fe00a3c3ffab83360b6aafc40db839bc"
  },
  {
    "url": "assets/js/19.24c0c259.js",
    "revision": "824fc9944e99aecc9d1a9c5206539531"
  },
  {
    "url": "assets/js/20.f667f8c4.js",
    "revision": "4c5fba020ef768f50c8bdcccd44a768c"
  },
  {
    "url": "assets/js/21.ebffa72b.js",
    "revision": "5a78eccbc2d29d260ccba152a7589515"
  },
  {
    "url": "assets/js/22.228497f9.js",
    "revision": "001a521cf02e22d5b86d97eed710ce01"
  },
  {
    "url": "assets/js/23.b7885614.js",
    "revision": "f8713f94cff662a68dc68f9d176165b1"
  },
  {
    "url": "assets/js/24.f3472655.js",
    "revision": "8ada1c1375baa91abb0309e412292bf4"
  },
  {
    "url": "assets/js/25.4975addf.js",
    "revision": "a5b528d31215859c9a234456f17ad17c"
  },
  {
    "url": "assets/js/26.7c34be8c.js",
    "revision": "4eefa05334b5e1810bd3035c8c700c74"
  },
  {
    "url": "assets/js/27.b4df8f4a.js",
    "revision": "4e5dad6852ad5b14f8f271de6342124f"
  },
  {
    "url": "assets/js/28.4250d652.js",
    "revision": "0062bb737faee4cc6314188a6808e726"
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
    "url": "assets/js/app.9b43fabc.js",
    "revision": "d5e76cbb5801f697251928963ebc83d4"
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
    "revision": "dfdf9fe258c193d40a0c2a0f31018685"
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
    "revision": "de7c17e9b3b5563fe37c6461581c00fe"
  },
  {
    "url": "notes-vuepress/faq.html",
    "revision": "ed3bcd57cb66ea3cfd67ff9409a04f87"
  },
  {
    "url": "notes-vuepress/getting-started.html",
    "revision": "b29b0aa58c9cdf60a4853464e85824e2"
  },
  {
    "url": "notes-vuepress/index.html",
    "revision": "eb077ce6462e5a9850fe632bd403b0f5"
  },
  {
    "url": "notes-vuepress/markdown-demo.html",
    "revision": "7b35bbdbd365bfc349a93bf155d76b04"
  },
  {
    "url": "notes-vuepress/markdown-page.2.html",
    "revision": "2cd65f45fe815183cd52741df67cd46b"
  },
  {
    "url": "notes-vuepress/markdown-page.html",
    "revision": "4caba79f1ec4d886f60b0c0198223301"
  },
  {
    "url": "notes-vuepress/ref.index.html",
    "revision": "07669fe31fe0d01228a7ebea1b1e2fe2"
  },
  {
    "url": "notes-vuepress/ref.refs.html",
    "revision": "f59f717bf02e180fbbb893af29d1e7d1"
  },
  {
    "url": "notes-vuepress/refs.html",
    "revision": "da3d8fed42df5be1810f3d5cc2e9ea94"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "zh/index.html",
    "revision": "ec6c3641ef0d196c2db676a4b2faebc3"
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