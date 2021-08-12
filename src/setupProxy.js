const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api-public.sandbox.pro.coinbase.com/products/BTC-USD',
      changeOrigin: true,
    })
  );
};