require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stomach curtain magic erosion inner clinic equal gas'; 
let testAccounts = [
"0x67db6411545f73175ada1c8e475ca8c46d4ac4be18b4409b1f2c56e51d7de870",
"0x10750d3b90c763fd214f50a4405b46e2a4d96bcc5ff93d510e1d80677ab896d9",
"0x56c528475f3faf6b5e9184ebac8f275272bd59a06eacd5ebccbc453b3442c36f",
"0x37d19ae0fc7b737eaf925c19ccaedcc2734a046c8214a0900c6181e02d2f7f5d",
"0xbd4fc7d9e79cdb2b0c89023ee8945d974a9cf57355c042a15b6955939738eb28",
"0x5cdb3985a4b9b985b412daa5f43e996365a7c8a721b5a486c58b1b1ccf1ab56c",
"0xc516dd4c70e9dae37e72f096a104de64a01e829ab01bf0b5c4f2817fbc7a5702",
"0x782f6a15bc64163c6f98962355c37175f8d905ef819f38cb1d75a69a52781748",
"0xd81b71d1d8b6270f3d6ac9ca7807044b2cb3e36df0834a147824ad7efb189c40",
"0x00b321bf1afe8bc48d7aef1457c0ce22cee534a99b6a517620bad024de0cd88d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

