var HDWalletProvider = require('@truffle/hdwallet-provider');
var mnemonic = "aee45dc595522040546903792558508e0329abdc08436959940a20d8ba31eff4";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic,     "https://rinkeby.infura.io/v3/d637794a33d74e43a50675c17b1ebd89");
      },
      network_id: 1
    }
  }
};