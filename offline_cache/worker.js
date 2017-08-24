/* eslint-env worker */
import RoboHash from './robohash'

self.addEventListener('install', (e) => {
  self.skipWaiting()
  e.waitUntil(
    caches.open('v1').then(cache => cache.addAll(RoboHash.urls)),
  )
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        console.log(`Using cache: ${e.request.url}`)
        return response
      }
      // Fallback to fetch API
      return fetch(e.request)
    }),
  )
})
