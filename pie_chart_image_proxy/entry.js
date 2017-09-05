import ServiceWorker from '../lib/service_worker'
import qs from 'qs'

new ServiceWorker('../_worker.js')
  .catch(message => alert(message))

const updateChart = (query) => {
  const escapedQuery = qs.stringify(qs.parse(query))
  document.querySelector('#chart').setAttribute('src', `./chart.gif?${escapedQuery}`)
}

const queryInput = document.querySelector('#query')
updateChart(queryInput.value)

queryInput.addEventListener('input', e => updateChart(e.target.value))
