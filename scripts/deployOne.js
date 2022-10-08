// imports
const { ethers, run, network } = require("hardhat")

//asyn main()

async function main() {
    const one_factory = await ethers.getContractFactory("FundMe")
    console.log("Deploying contract...")
    const oneContract = await one_factory.deploy()
    await oneContract.deployed()
    console.log(`deployed at : ${oneContract.address}`)
    if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        await oneContract.deployTransaction.wait(6)
        await verify(oneContract.address, [])

    }
    //   await oneContract.addFunder("Morad", 10)
    //   console.log("You are funding now .....")
    //   const fundedAmount = await oneContract.getTotal("Morad")
    //   console.log(`Current Value is: ${fundedAmount}`)
    //   await oneContract.addFunder("Morad", 5)
    //   console.log("You are funding again .....")
    //   const newAmount = await oneContract.getTotal("Morad")
    //   console.log(`updated Value is: ${newAmount}`)
    //   await oneContract.withdraw('Morad', 2)
    //   console.log('You withdraw now ...')
    //   const updatedAmount = await oneContract.getTotal("Morad")
    //   console.log(`updated Value is: ${updatedAmount}`)
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
