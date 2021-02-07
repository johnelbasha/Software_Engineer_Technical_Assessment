const validDataArg = [
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

function accountTypeChecker(data) {

    if (
        Array.isArray(data) &&
        data.length >= 3 &&
        data.every(child => child.constructor == Object &&
                            Object.keys(child).length === 2 &&
                            Object.keys(child).includes('account') &&
                            child['account'].constructor == Object &&
                            Object.keys(child['account']).length === 1 &&
                            child['account']['balance'].constructor == Object
        )
    ) {
        return 1000;
    }
    else {
        return false;
    }
}

// console.log(accountTypeChecker(validDataArg));

module.exports.accountTypeChecker = accountTypeChecker;
