import web3 from './web3';
let abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            },
            {
                "name": "_insuranceNumber",
                "type": "bytes32"
            },
            {
                "name": "_numOfInsurance",
                "type": "bytes32"
            },
            {
                "name": "_insuranceDetail",
                "type": "bytes32"
            },
            {
                "name": "_insuranceId",
                "type": "bytes32"
            },
            {
                "name": "_insuranceCompanyName",
                "type": "bytes32"
            },
            {
                "name": "_insuranceCompanyAddress",
                "type": "bytes32"
            },
            {
                "name": "_issuedDate",
                "type": "uint256"
            },
            {
                "name": "_additionalDetail",
                "type": "bytes32"
            }
        ],
        "name": "addInsuranceData",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "addInsuranceOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            },
            {
                "name": "_shopId",
                "type": "bytes32"
            },
            {
                "name": "_shopName",
                "type": "bytes32"
            },
            {
                "name": "_shopAddress",
                "type": "bytes32"
            },
            {
                "name": "_carDetail",
                "type": "bytes32"
            },
            {
                "name": "_workDescription",
                "type": "bytes32"
            },
            {
                "name": "_moneyCharged",
                "type": "bytes32"
            },
            {
                "name": "_typeOfWork",
                "type": "bytes32"
            },
            {
                "name": "_issuedDate",
                "type": "uint256"
            },
            {
                "name": "_additionalDetail",
                "type": "bytes32"
            }
        ],
        "name": "addMechanicData",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "addMechanicOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            },
            {
                "name": "_ownerName",
                "type": "bytes32"
            },
            {
                "name": "_regId",
                "type": "bytes32"
            },
            {
                "name": "_milesOnCar",
                "type": "bytes32"
            },
            {
                "name": "_modelDetail",
                "type": "bytes32"
            },
            {
                "name": "_numberPlate",
                "type": "bytes32"
            },
            {
                "name": "_motorDeptCity",
                "type": "bytes32"
            },
            {
                "name": "_motorDeptAddress",
                "type": "bytes32"
            },
            {
                "name": "_issuedDate",
                "type": "uint256"
            },
            {
                "name": "_additionalDetail",
                "type": "bytes32"
            }
        ],
        "name": "addMotorDeptData",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "addMotorDeptOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            },
            {
                "name": "_ownerDetail",
                "type": "bytes32"
            },
            {
                "name": "_modelDetail",
                "type": "bytes32"
            },
            {
                "name": "_carCost",
                "type": "bytes32"
            },
            {
                "name": "_carLoanOrBankDetail",
                "type": "bytes32"
            },
            {
                "name": "_showroomName",
                "type": "bytes32"
            },
            {
                "name": "_showroomAddress",
                "type": "bytes32"
            },
            {
                "name": "_showroomId",
                "type": "bytes32"
            },
            {
                "name": "_issuedDate",
                "type": "uint256"
            },
            {
                "name": "_additionalDetail",
                "type": "bytes32"
            }
        ],
        "name": "addShowroomData",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "addShowroomOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "removeInsuranceOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "removeMechanicOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "removeMotorDeptOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "removeShowroomOwner",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipRenounced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            }
        ],
        "name": "getInsuranceDataByVin1",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            }
        ],
        "name": "getInsuranceDataByVin2",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "uint256[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            }
        ],
        "name": "getMechanicDataByVin1",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            }
        ],
        "name": "getMechanicDataByVin2",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "uint256[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            }
        ],
        "name": "getMotorDeptDataByVin1",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            }
        ],
        "name": "getMotorDeptDataByVin2",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "uint256[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            }
        ],
        "name": "getShowroomDataByVin1",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_vin",
                "type": "bytes32"
            }
        ],
        "name": "getShowroomDataByVin2",
        "outputs": [
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            },
            {
                "name": "",
                "type": "uint256[]"
            },
            {
                "name": "",
                "type": "bytes32[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "idToInsuranceData",
        "outputs": [
            {
                "name": "vin",
                "type": "bytes32"
            },
            {
                "name": "insuranceNumber",
                "type": "bytes32"
            },
            {
                "name": "numOfInsurance",
                "type": "bytes32"
            },
            {
                "name": "insuranceDetail",
                "type": "bytes32"
            },
            {
                "name": "insuranceId",
                "type": "bytes32"
            },
            {
                "name": "insuranceCompanyName",
                "type": "bytes32"
            },
            {
                "name": "insuranceCompanyAddress",
                "type": "bytes32"
            },
            {
                "name": "issuedDate",
                "type": "uint256"
            },
            {
                "name": "additionalDetail",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "idToMechanicData",
        "outputs": [
            {
                "name": "vin",
                "type": "bytes32"
            },
            {
                "name": "shopId",
                "type": "bytes32"
            },
            {
                "name": "shopName",
                "type": "bytes32"
            },
            {
                "name": "shopAddress",
                "type": "bytes32"
            },
            {
                "name": "carDetail",
                "type": "bytes32"
            },
            {
                "name": "workDescription",
                "type": "bytes32"
            },
            {
                "name": "moneyCharged",
                "type": "bytes32"
            },
            {
                "name": "typeOfWork",
                "type": "bytes32"
            },
            {
                "name": "issuedDate",
                "type": "uint256"
            },
            {
                "name": "additionalDetail",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "idToMotorDeptData",
        "outputs": [
            {
                "name": "vin",
                "type": "bytes32"
            },
            {
                "name": "ownerName",
                "type": "bytes32"
            },
            {
                "name": "regId",
                "type": "bytes32"
            },
            {
                "name": "milesOnCar",
                "type": "bytes32"
            },
            {
                "name": "modelDetail",
                "type": "bytes32"
            },
            {
                "name": "numberPlate",
                "type": "bytes32"
            },
            {
                "name": "motorDeptCity",
                "type": "bytes32"
            },
            {
                "name": "motorDeptAddress",
                "type": "bytes32"
            },
            {
                "name": "issuedDate",
                "type": "uint256"
            },
            {
                "name": "additionalDetail",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "idToShowRoomData",
        "outputs": [
            {
                "name": "vin",
                "type": "bytes32"
            },
            {
                "name": "ownerDetail",
                "type": "bytes32"
            },
            {
                "name": "modelDetail",
                "type": "bytes32"
            },
            {
                "name": "carCost",
                "type": "bytes32"
            },
            {
                "name": "carLoanOrBankDetail",
                "type": "bytes32"
            },
            {
                "name": "showroomName",
                "type": "bytes32"
            },
            {
                "name": "showroomAddress",
                "type": "bytes32"
            },
            {
                "name": "showroomId",
                "type": "bytes32"
            },
            {
                "name": "issuedDate",
                "type": "uint256"
            },
            {
                "name": "additionalDetail",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "insuranceDataIds",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "InsuranceOwners",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "mechanicDataIds",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "MechanicOwners",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "motorDeptDataIds",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "MotorDeptOwners",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "showroomDataIds",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "ShowroomOwners",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "vinToInsuranceDataId",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "vinToMechanicDataId",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "vinToMotorDeptDataId",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "vinToShowroomDataId",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];



const contractAddress = '0x48df588457821a7ab149352672c6c8418f2225e5';

export default new web3.eth.Contract(abi, contractAddress);