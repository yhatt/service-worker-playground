/* eslint-env worker */
import url from 'url'
import qs from 'qs'
import PieChart from './pie_chart'

self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('fetch', (e) => {
  const requestUrl = url.parse(e.request.url)

  if (requestUrl.hostname === 'localhost' && requestUrl.pathname === '/pie_chart_image_proxy/chart.gif') {
    const query = qs.parse(requestUrl.query)
    const targetKeys = Object.keys(query).filter(q => !isNaN(parseFloat(query[q])))
    const values = targetKeys.map((key) => parseFloat(query[key]))
    const chart = new PieChart(...values)

    e.respondWith(
      new Response(
        chart.renderAsSVG(),
        {
          headers: { 'Content-Type': 'image/svg+xml' }
        }
      )
    )
  }
})
