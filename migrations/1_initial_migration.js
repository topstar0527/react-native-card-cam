var bank = artifacts.require("./bank.sol");

module.exports = function(deployer) {
  deployer.deploy(bank);
};
