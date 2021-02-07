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
                            child['account']['balance'].constructor == Object &&
                            Object.keys(child['account']['balance']).length === 1 &&
                            typeof(child['account']['balance']['amount']) === 'number'
        )
    ) {
        let amounts = [];
        for (let child of data){
            amounts.push(child['account']['balance']['amount']);
        }
        let deltas = [];
        for (let i = 0; i < amounts.length - 1; i++) {
            deltas.push(amounts[i+1] - amounts[i]);
        }
        if (deltas.every(diff => diff === deltas[0])){
            return 'B';
        } else {
            return 'A';
        } 
    }
    else {
        return false;
    }
}

accountTypeChecker(validDataArg);

module.exports.accountTypeChecker = accountTypeChecker;
