
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'URL',
      accounts: ['SECRET_KEY']
    }
  } 
}