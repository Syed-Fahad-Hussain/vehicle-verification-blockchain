import web3 from '../interface/web3';

const helperFunctions = {
    convertStringToHex: (value) => {
        return web3.utils.fromAscii(value)
    },

    convertHexToString: (value) => {
        return web3.utils.toAscii(value)
    },
    getUnixTime: () => {
        return (new Date).getTime();
    },
    isEmpty: (obj) => {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
    }
};


export default helperFunctions;

