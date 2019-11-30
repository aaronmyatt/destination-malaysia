importScripts('/destination-malaysia/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/destination-malaysia/_nuxt/14535d94dff4e18b4b02.js",
    "revision": "36f1af233c10f7ee944ab0ac643c0bc5"
  },
  {
    "url": "/destination-malaysia/_nuxt/28d20b64a44d7bf1d316.css",
    "revision": "4b37314c6bae77d7fff0f276cf5d7454"
  },
  {
    "url": "/destination-malaysia/_nuxt/391d78c42f7ae66b3b67.js",
    "revision": "8de055f05d811d592df99c4e4af02a47"
  },
  {
    "url": "/destination-malaysia/_nuxt/42c2bcf14705197d458c.js",
    "revision": "ca7ff715aed9c004e60017d870351576"
  },
  {
    "url": "/destination-malaysia/_nuxt/4b80bd240b9f78d2b6f6.js",
    "revision": "193ca340027e22ca93ef93dcac421859"
  },
  {
    "url": "/destination-malaysia/_nuxt/633438e45e4dd1f62a9e.js",
    "revision": "cd7e70a4fa779358fcaa65bebd106ed8"
  },
  {
    "url": "/destination-malaysia/_nuxt/69525e2dd80c7ed2be36.js",
    "revision": "72828098566fe388098c74b11a8da250"
  },
  {
    "url": "/destination-malaysia/_nuxt/99fdba1bbf53ee530917.js",
    "revision": "38ffff6c112d753076d5b1674155171c"
  },
  {
    "url": "/destination-malaysia/_nuxt/e13e30e048a0ce249a9e.js",
    "revision": "c20affd2b98be2982ad6895d8906ba2f"
  }
], {
  "cacheId": "destination-malaysia",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/destination-malaysia/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/destination-malaysia/.*'), workbox.strategies.networkFirst({}), 'GET')
