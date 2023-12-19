export const DEPLOYMENT_ADDRESS = "0x57DFf11E5bB09585B8c4B72083F189F406B6D052";
export const ABI = ` [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "producer",
          "type": "address"
        }
      ],
      "name": "ListingAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "units",
          "type": "uint256"
        }
      ],
      "name": "UnitsPurchased",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "units",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pricePerUnit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "listingPeriod",
          "type": "uint256"
        }
      ],
      "name": "addListing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "unitsToBuy",
          "type": "uint256"
        }
      ],
      "name": "buyUnits",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "buyers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "unitsToBuy",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "consumer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        }
      ],
      "name": "checkListing",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllListingIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        }
      ],
      "name": "getListingDetails",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "enum EnergyTrading.Status",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "producers",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "listingId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "units",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "pricePerUnit",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "listingPeriod",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "producer",
          "type": "address"
        },
        {
          "internalType": "enum EnergyTrading.Status",
          "name": "status",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]`;
