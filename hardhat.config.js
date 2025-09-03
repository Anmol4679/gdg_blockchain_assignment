require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/gy6pNySOM720R_l3jyM_A}',
      accounts: [0x341DF0D8f0304E5A74dd5dDA166FAc47BC1dC5de]
    }
  }
};
