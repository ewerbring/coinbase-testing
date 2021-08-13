const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express()

app.use(express.static('client'))

const apiProxy = createProxyMiddleware({
  target: 'https://api-public.sandbox.pro.coinbase.com/',
  changeOrigin: true,
  onProxyRes: res => {
    res.headers = {
      ...res.headers,
      'access-control-allow-headers':
        'Content-Type, cb-access-key, cb-access-sign, cb-access-timestamp, cb-access-passphrase',
    }
  },
})

app.use('/', apiProxy)

app.listen(3002)