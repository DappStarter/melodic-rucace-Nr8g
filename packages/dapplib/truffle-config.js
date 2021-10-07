require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note six property gesture brass equal gather'; 
let testAccounts = [
"0x6d25dbf76de59e301ed5951cb5498dd7c994c9cbd5b8674b78ea3ced49c69d0f",
"0x728f4f16385ab76f2f7406ef64e895885343037585808b6aa6212563013c7fb9",
"0xd29740d35b35417c8fd8280012863393f704a6560e0ee64c8d7fddbbc3bbc705",
"0x1a3baf139f4f7b45a2471dff12bef714c6308c80412ebdbb175f8ae21d63f273",
"0x11da5eee2eeb625f8ef5a50672f6067896834946fbb8bad209297b5a411a83e6",
"0x7aa3f1817e91275323a6b28e74d2e8e19d6224ad2f3faaece6cc58e75be14189",
"0xb29898c99a6b0742ba667652558ef3354cd6fa69d327d0347bfbf39684e7c18f",
"0x31f9b1888cbdade0eaea575228859e88884645a5e73c28538a3283a382a74f3a",
"0xf1c114e4ce86cbc0882ae164bdc1631a2619eba9d2d2c8ce2028cc32f1d72372",
"0xd7bad8e909fd57b54210fbeaf6d1a9baf0e3fd06a6cf487a8c66ed2a07de8ddc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

