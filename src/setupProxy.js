const { createProxyMiddleware } = require('http-proxy-middleware');
// const sandboxURI = 'https://api-public.sandbox.pro.coinbase.com/coinbase-accounts';

const sandboxURI = 'https://api-public.sandbox.pro.coinbase.com';


module.exports = app => {

  app.use(
    "/api",
    createProxyMiddleware({
      target: sandboxURI,
      changeOrigin: true,
      header: sandboxURI,
      host: "https://localhost:3001"
    })
  );
};