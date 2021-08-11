import React from 'react'

const { createProxyMiddleware } =require('http-proxy-middleware')


const CoinbasePro = require('coinbase-pro');


const key = '3cc67cda1ba3e0beabb22dadd889c23b';

const secret = 'okmaGMsRFHEGXoLLhLn17pudpvbDNnHVIGMV4DSbNREuWhDqbY0gSrcKi6bkIeHnfCdF08bfUN3UsdsSjj3sqw==';
const passphrase = '444444';
const apiURI = 'https://api.pro.coinbase.com';
const sandboxURI = 'https://api-public.sandbox.pro.coinbase.com';

  

const authedClient = new CoinbasePro.AuthenticatedClient(
  key,
  secret,
  passphrase,
sandboxURI,

);

export default function Coin() {

function testing(){
const accounts = authedClient.getCoinbaseAccounts();

    // authedClient.header = header
    const account = authedClient.getAccount
    console.log(accounts);
    
}    
    return (
        <div>
            <button onClick={()=>testing()}> testing</button>
        </div>
    )
}
