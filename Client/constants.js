export const contractAddress = "0x53Ceb44914FF20bf9C5502624D1E0629ea53Ef84"
export const abi = [
  {
    "inputs": [],
    "name": "opinion",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "publishOpinion",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_opinion",
        "type": "string"
      }
    ],
    "name": "sayOpinion",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]