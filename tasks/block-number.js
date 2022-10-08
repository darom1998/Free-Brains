const {task} =require("hardhat/config")

task("block-number","Prints the current block number of the network").setAction(
    async (taskArgs, hre) =>{
           const blockNumber = await hre.ethers.provider.getBlockNumber()
           console.log(` Block number  is: ${blockNumber}`)
    }
)
module.exports = {}
