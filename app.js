const validAccountBalanceHistory = [
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

// validation error checks
function checkForValidationErrors(data) {
    let validationErrors = 0;
    if (!Array.isArray(data) || data.length < 3) {
        validationErrors += 1;
    }

    if (typeof(data) !== 'string') {
        if (!data.every(element => element.constructor == Object)){
            validationErrors += 1;
        }

        if(!data.every(element => Object.keys(element).length === 2 )){
            validationErrors += 1;
        }

        if(data.every(element => Object.keys(element).includes('account'))) {
            if(!data.every(element => element['account'].constructor == Object)){
                validationErrors += 1;
            } else if (data.every(element => Object.keys(element['account']).length !== 1)) {
                validationErrors += 1;
            }
        }

        // if(data.every(element => Object.keys(element['account']).length !== 1)){
        //     validationErrors += 1;
        // }

    }
    return validationErrors;
}

function accountTypeChecker(data) {
    errors = checkForValidationErrors(data);
    // console.log(data);
    // console.log(errors);

    if (errors !== 0) {
        return false;
    }
    const closingBalances = [];
    data.forEach(element => {
        closingBalances.push(element['account']['balance']['amount']);
    });
    // Step 3: now we have an array with three entries we can do an if statement as follows
    // 3.1 if the difference between the first and second numbers is the same as the difference between the second and third,
    // 3.1.a return 'B'
    // 3.1.b otherwise return 'C'
    return 'A';
}

// manual tests

console.log('new tests *******');
accountDictionaryHasTwoElements = validAccountBalanceHistory;
accountDictionaryHasTwoElements[0]['account']['newBalance'] = 0;
console.log(accountDictionaryHasTwoElements);
console.log(accountTypeChecker(accountDictionaryHasTwoElements));

module.exports.accountTypeChecker = accountTypeChecker;