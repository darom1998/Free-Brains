// imports
const { ethers, run, network } = require("hardhat")

//asyn main()

async function main() {
    const talks_factory = await ethers.getContractFactory("FreeTalks")
    console.log("Deploying contract...")
    const talksContract = await talks_factory.deploy()
    await talksContract.deployed()
    console.log(`deployed at : ${talksContract.address}`)
    if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        await talksContract.deployTransaction.wait(6)
        await verify(talksContract.address, [])

    }
    await talksContract.sayOpinion("We love Blockchain")
    console.log("You are sharing your opinion now .....")
    const opinionTalks = await talksContract.publishOpinion()
    console.log(`${talksContract.address} said that :  ${opinionTalks}`)

    // Update the current value
    //    console.log("You are depoditing money right now .....")
    //    const transactionResponse = await hello.deposite_money(13)
    //    await transactionResponse.wait(1)
    //    const updatedValue = await hello.getBalance()
    //    console.log(`Updated Value is: ${updatedValue}`)


}
async function verify(contractAddress, args) {
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}


// call main()
main()
    .then(() => process.exit(0)).
    catch((error) => {
        console.log(error);
        process.exit(1);
    })
