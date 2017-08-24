/* eslint-env worker */
self.addEventListener('install', e => self.skipWaiting())

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
  e.waitUntil(clients.openWindow('http://localhost:8080/push_notification/'))
})
