const path = require("path");

const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
    networks: {
        development: {
            port: 7545,
            network_id: "*",
            host: "127.0.0.1",
        },
        testnet: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    `https://data-seed-prebsc-1-s1.binance.org:8545`
                ),
            network_id: 97,
            confirmations: 10,
            timeoutBlocks: 200,
            skipDryRun: true,
        },
    },
    compilers: {
        solc: {
            version: "0.8.10",
        },
    },
};
