// imports
const { ethers, run, network } = require("hardhat")

//asyn main()

async function main() {
  const bank_factory = await ethers.getContractFactory("Bank")
  console.log("Deploying contract...")
  const bank = await bank_factory.deploy()
  await bank.deployed()
  console.log(`deployed at : ${bank.address}`)
  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...")
    await bank.deployTransaction.wait(6)
    await verify(bank.address,[])
    
  }
  const currentValue = await bank.getBalance()
  console.log(`Current Value is: ${currentValue}`)
   // Update the current value
   console.log("You are depoditing money right now .....")
   const transactionResponse = await bank.deposite_money(13)
   await transactionResponse.wait(1)
   const updatedValue = await bank.getBalance()
   console.log(`Updated Value is: ${updatedValue}`)


}
async function verify(contractAddress , args){
      try{
        await run("verify:verify",{
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
catch((error) =>
 {
    console.log(error);
    process.exit(1);
 })
