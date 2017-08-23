export default function ServiceWorker(...args) {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker.register(...args)
  }
  return Promise.reject("Sorry, your browser doesn't support Service Worker.")
}
