import { ethers } from "./ethers-5.6.esm.min.js"
import { abi, contractAddress } from "./constants.js"

const connectBTN = document.getElementById("connectButton")
const talkButton = document.getElementById("talkBN")
const shareButton = document.getElementById("shareBN")




connectBTN.onclick = connect
talkButton.onclick = talk
shareButton.onclick = share

async function connect() {
    if (typeof window.ethereum !== "undefined") {

        await ethereum.request({ method: "eth_requestAccounts" })
        //connectBTN.innerHTML = "Connected"
        document.getElementById("span").innerHTML = "Connected";


    }
    else {
        connectBTN.innerHTML = "Please install METAMASK"
    }
}


async function talk() {
    const ops = document.getElementById("op").value
    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signer)
        try {
            const transactionResponse = await contract.sayOpinion(ops)
            await listenForTransactionMine(transactionResponse, provider)

        } catch (error) {
            console.log(error)
        }
    } else {
        talkButton.innerHTML = "Please install MetaMask"
    }
}


async function share() {
    const ops = document.getElementById("op").value
    document.getElementById("out").innerHTML = ops;
}


function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}`)
    return new Promise((resolve, reject) => {
        provider.once(transactionResponse.hash, (transactionReceipt) => {
            console.log(
                `Completed with ${transactionReceipt.confirmations} confirmations. `
            )
            document.getElementById("out1").innerHTML = `This address  ${transactionReceipt.from} said that : `;
            resolve()
        })
    })
}