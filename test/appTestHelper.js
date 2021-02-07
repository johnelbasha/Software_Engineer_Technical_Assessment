// data argument structures to be used in test suite:

let validDataArg = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]

let dataNotEnoughChildren = validDataArg.slice(0,2);
let dataArrayWithNonDictChild = validDataArg.slice(0,2);
dataArrayWithNonDictChild.push('string');
let dataDictTooManyChild = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
        key: 'string',
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]
let accountKeyCorrupted = [ // TODO: Need to make this slicker.
    {
        monthNumber: 0, // current month
        corruptedKey: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]
let accountNotDictionary = [ // TODO: Need to make this slicker.
    {
        monthNumber: 0, // current month
        account: 'string',
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]
let accountTooManyChildren = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
            string: 'string',
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]
let balanceKeyDoesNotReturnDict = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: 'string',
        },
    }
]
let balanceDictTooManyChild = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200, string: 'string' },
        },
    }
]
let amountDoesNotReturntNumber = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 'string' },
        },
    }
]
let validDataArgTypeA = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 75 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]
module.exports.validDataArg = validDataArg;
module.exports.dataNotEnoughChildren = dataNotEnoughChildren;
module.exports.dataArrayWithNonDictChild = dataArrayWithNonDictChild;
module.exports.dataDictTooManyChild = dataDictTooManyChild;
module.exports.accountKeyCorrupted = accountKeyCorrupted;
module.exports.accountNotDictionary = accountNotDictionary;
module.exports.accountTooManyChildren = accountTooManyChildren;
module.exports.balanceKeyDoesNotReturnDict = balanceKeyDoesNotReturnDict;
module.exports.amountDoesNotReturntNumber = amountDoesNotReturntNumber;
module.exports.validDataArgTypeA = validDataArgTypeA;
