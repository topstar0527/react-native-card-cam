const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");
// 提供助记词（mnemonic）来生成你的账户
const  mnemonic = "";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
   
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  }
};
