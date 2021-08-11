import React from 'react'
const key = 'b351922c71e1e4d00f7a0c388f41fe36';
const secret = '0elkgDBblHixo59boMwz79O+1StK30mFwby/mwiyYjDfUXt+dgEYJOIVWRWT+t8iqg3SS3vr2zxwOZe1G+bd2A==';
const passphrase = '444444';

const apiURI = 'https://api.pro.coinbase.com';
const sandboxURI = 'https://api-public.sandbox.pro.coinbase.com';
const { CoinbasePro } = require('coinbase-pro-node');

const auth = {
  key: key,
  secret: secret,
  passphrase: passphrase,
  sandboxURI: sandboxURI
};

function testing(){
    console.log(auth.passphrase)
}



const client = new CoinbasePro(auth);

client.rest.account.listAccounts().then((accounts) => {
  const message = accounts.length;
  console.log(message);
});



export default function Coin2() {
    return (
        <div>
            <button onClick={()=>testing()}>testing4</button>
        </div>
    )
}
