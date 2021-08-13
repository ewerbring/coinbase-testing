import React from 'react';

var crypto = require('crypto');
var request = require('request');
    
async function cb_request( method, path, headers = {}, body = ''){
    
      var apiKey = '3cc67cda1ba3e0beabb22dadd889c23b',
          apiSecret = 'okmaGMsRFHEGXoLLhLn17pudpvbDNnHVIGMV4DSbNREuWhDqbY0gSrcKi6bkIeHnfCdF08bfUN3UsdsSjj3sqw==',
          apiPass = '444444';
    
      //get unix time in seconds
      var timestamp = Math.floor(Date.now() / 1000);
    
      // set the request message
      var message = timestamp + method + path + body;
      console.log('######## message=' + message);
    
      //create a hexedecimal encoded SHA256 signature of the message
      var key = Buffer.from(apiSecret, 'base64');
      var signature = crypto.createHmac('sha256', key).update(message).digest('base64');
    
      //create the request options object    
      var baseUrl = 'http://localhost:3002';//'https://api-public.sandbox.pro.coinbase.com';
    
      headers = Object.assign({},headers,{
        'content-type': 'application/json; charset=UTF-8',
          'CB-ACCESS-SIGN': signature,
          'CB-ACCESS-TIMESTAMP': timestamp,
          'CB-ACCESS-KEY': apiKey,
          'CB-ACCESS-PASSPHRASE': apiPass
        });
    
      // Logging the headers here to ensure they're sent properly
      console.log(headers);
    
      var options = {
          'baseUrl': baseUrl,
          'url': path,
          'method': method,
          'headers': headers,
          'body': body
    
      };
    
      return new Promise((resolve,reject)=>{
        request( options, function(err, response, body){
          console.log(response.statusCode + "  " + response.statusMessage);
          if (err) reject(err);
          resolve(JSON.parse(response.body));
        });
      });
    
    }
    
    export default function main() {
    
    async function main() {
      
        // This queries a product by id (successfully)
        try {
          console.log('try to call product------->');
           console.log( await cb_request('GET','/products/BTC-USD') );
           console.log('product------------------->done');
        }
        catch(e) {
           console.log(e);
        }
      
        var buyParams = JSON.stringify({
          'type': 'market',
          'side': 'buy',
          'funds': '10',
          'product_id': 'BTC-USD'
        });
      
        try {
          console.log('try to call orders------->');
          var buy = await cb_request('POST','/orders', {}, buyParams);
          console.log(buy);
          console.log('orders----------------------->done');
      
        }
        catch(e) {
           console.log(e);
        }
      
      }

            return (
                <div>
                    <button onClick={()=>main()}> main</button>
                </div>
            )
        }