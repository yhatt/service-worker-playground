import ServiceWorker from '../lib/service_worker'
import RoboHash from './robohash'

if (window.location.search.substring(1) !== 'off') {
  new ServiceWorker('/offline_cache/worker-compiled.js', { scope: '/offline_cache/' })
    .catch(message => alert(message))
}

RoboHash.generateImages(document.querySelector('#content'))
