import ServiceWorker from '../lib/service_worker'

const subscriptionChk = document.querySelector('#subscription')

new ServiceWorker('/push_notification/worker-compiled.js', { scope: '/push_notification/' })
  .then((worker) => {
    worker.pushManager.getSubscription().then((subscription) => {
      subscriptionChk.checked = subscription !== null
      subscriptionChk.disabled = false
    })
  })
  .catch(message => alert(message))

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.reggist
}
