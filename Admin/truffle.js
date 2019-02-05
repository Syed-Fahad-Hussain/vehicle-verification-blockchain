/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

let HDWalletProvider = require('truffle-hdwallet-provider');
let mnemoic ="drip bargain lemon post million timber nephew maze burger sand morning grid";

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    // networks: {
    //     rinkeby: {
    //         provider: function () {
    //             return new HDWalletProvider(mnemoic, 'https://rinkeby.infura.io/e7cc830da9f546b29a0f80a94a2e8cc6')
    //         },
    //         network_id: 1
    //     }
    //
    // }

    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        }
    }
};

