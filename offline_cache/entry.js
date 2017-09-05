import ServiceWorker from '../lib/service_worker'
import RoboHash from './robohash'

new ServiceWorker('../_worker.js')
  .catch(message => alert(message))

RoboHash.generateImages(document.querySelector('#content'))
