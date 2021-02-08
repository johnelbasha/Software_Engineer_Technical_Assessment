function isArgumentValid(data){
    if(Array.isArray(data) &&
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
    ){
        return true;
    }
    else {
        return false;
    }
}

function buildDifferencesArray(data) {
    let amounts = [];
    for (let child of data){
        amounts.push(child['account']['balance']['amount']);
    }
    let deltas = [];
    for (let i = 0; i < amounts.length - 1; i++) {
        deltas.push(amounts[i+1] - amounts[i]);
    }
    return deltas;
}

function analyse(deltas){
    if (deltas.every(diff => diff === deltas[0])){
        return 'B';
    } else {
        return 'A';
    } 
}

function accountTypeChecker(data) {
    if (isArgumentValid(data)) {
        deltas = buildDifferencesArray(data);
        return analyse(deltas);
    }
    else {
        return false;
    }
}

module.exports.accountTypeChecker = accountTypeChecker;
