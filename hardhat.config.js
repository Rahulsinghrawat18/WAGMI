require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.27",
    settings: {
      evmVersion: "paris",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    coreTestnet: {
      url: process.env.CORE_TESTNET_RPC_URL, // Core testnet RPC URL
      accounts: [process.env.PRIVATE_KEY], // Wallet private key
      gasPrice: 35_000_000_000, // 35 Gwei (matches Core Testnet)
      maxPriorityFeePerGas: 1_000_000_000, // Set to 1 Gwei
      maxFeePerGas: 35_000_000_000, // 35 Gwei
    },
  },
};
