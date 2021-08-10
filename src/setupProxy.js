const { createProxyMiddleware } = require('http-proxy-middleware');
const sandboxURI = 'https://api-public.sandbox.pro.coinbase.com/coinbase-accounts';


module.exports = app => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: sandboxURI,
      changeOrigin: true
    })
  );
};