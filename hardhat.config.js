require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Load env variables

module.exports = {
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: "0.8.27", // ✅ Match Solidity version in your contracts
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

