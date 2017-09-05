/* eslint-env worker */
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))

self.addEventListener('push', (e) => {
  e.waitUntil(
    self.registration.showNotification(
      'Service worker playground notification',
      {
        body: e.data.text(),
      },
    ),
  )
})

self.addEventListener('notificationclick', (e) => {
  e.notification.close()
  e.waitUntil(clients.openWindow('/push_notification/'))
})
