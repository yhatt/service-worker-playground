require('dotenv').config()
const webpush = require('web-push')
const commander = require('commander')

commander
  .option('--endpoint [url]', 'Endpoint URL')
  .option('--auth [token]', 'Auth token')
  .option('--p256dh [token]', 'p256dh token')
  .option('--payload [text]', 'Payload message', 'Push notification')
  .parse(process.argv)

if (!commander.endpoint) throw new Error('This command requires endpoint URL.')
if (!commander.auth) throw new Error('This command requires auth token.')
if (!commander.p256dh) throw new Error('This command requires p256dh token.')

webpush.setVapidDetails(
  process.env.CONTACT,
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
)

webpush.sendNotification({
  endpoint: commander.endpoint,
  keys: {
    auth: commander.auth,
    p256dh: commander.p256dh
  }
}, commander.payload)
