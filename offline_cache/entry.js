import ServiceWorker from '../lib/service_worker'
import RoboHash from './robohash'

new ServiceWorker('/offline_cache/worker-compiled.js', { scope: '/offline_cache/' })
  .catch(message => alert(message))

RoboHash.generateImages(document.querySelector('#content'))
