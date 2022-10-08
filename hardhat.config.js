require('@nomiclabs/hardhat-waffle')
require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block-number")
require("hardhat-gas-reporter")
require("solidity-coverage")
/** @type import('hardhat/config').HardhatUserConfig */
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API = process.env.ETHERSCAN_API
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },

  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API
  },
  gasReporter: {
    enable: true,
  },
  solidity: "0.8.8",
  gasReporter: {
    enabled: true,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
  },
};
