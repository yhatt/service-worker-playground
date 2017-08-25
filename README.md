# Service worker playground

## Getting started

Install packages and start server:

```bash
$ yarn install
$ yarn start
```

And you'll access to below URLs.

- Offline cache: http://127.0.0.1:8080/offline_cache/
- Pie chart image proxy: http://127.0.0.1:8080/pie_chart_image_proxy/
- Push notification: http://127.0.0.1:8080/push_notification/ _(It would not work in incognito mode)_

### For development

For compiling worker script, we use *iframe mode* in webpack-dev-server. You could access to `http://127.0.0.1:8080/webpack-dev-server/*/` if you want to develop with hot reloading feature.

## Author

Yuki Hattori ([@yhatt](https://github.com/yhatt/))

## License

This plugin releases under the [WTFPL License](https://github.com/yhatt/service-worker-playground/blob/master/LICENSE).
