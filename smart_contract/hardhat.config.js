
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/79S4ZADImA-DkoUGdRX0A990IXRXxqIG',
      accounts: ['76bb2524cc9699f036c8bd26d3c87c3f63773b736b5c3a7b3c0ef4b71aa03ae8']
    }
  } 
}