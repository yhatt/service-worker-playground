import ServiceWorker from '../lib/service_worker'

const subscriptionContent = document.querySelector('#subscription')
const notificationCommand = document.querySelector('#notification-command')

const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; i += 1) outputArray[i] = rawData.charCodeAt(i)
  return outputArray
}

const arrayBufferToBase64 = (buf) =>
  window.btoa(String.fromCharCode.apply(null, new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_')

new ServiceWorker('/push_notification/worker-compiled.js', { scope: '/push_notification/' })
  .then((worker) => {
    worker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(process.env.VAPID_PUBLIC_KEY),
    })
    .then((subscription) => {
      subscriptionContent.textContent = 'Notification is subscribing now. You can send notification with below:'
      notificationCommand.style.display = 'block'

      notificationCommand.value = `yarn webpush -- \\
        --endpoint ${subscription.endpoint} \\
        --auth ${arrayBufferToBase64(subscription.getKey('auth'))} \\
        --p256dh ${arrayBufferToBase64(subscription.getKey('p256dh'))} \\
        --payload 'Test notification!!'`
    })
    .catch((e) => {
      subscriptionContent.textContent = `Not subscribed (${e})`
    })
  })
  .catch(message => alert(message))
