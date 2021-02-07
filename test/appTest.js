const app = require('../src/app');
const assert = require('chai').assert;

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
let dataDictTooManyChild = [ // TODO: Need to make this slicker. Tried copying the original datavariable but it corrupted it!
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

describe('Behaviour of accountTypeChecker func. for errors in given arguments', function () {
    it('returns false if the argument given is not an array', function () {
        let result = app.accountTypeChecker('string');
        assert.equal(result, false);
    });

    it('it does not return false when a valid data argument is passed to it', function () {
        let result = app.accountTypeChecker(validDataArg);
        assert.notEqual(result, false);
    });

    it('returns false if the array provided contains less than three children', function(){
        let result = app.accountTypeChecker(dataNotEnoughChildren);
        assert.equal(result, false);
    });

    it('returns false if the array provided contains any non-dictionary children', function(){
        let result = app.accountTypeChecker(dataArrayWithNonDictChild);
        assert.equal(result, false);
    });

    it('returns false if any of the array child dictionaries does not contain exactly 2 children', function(){
        let result = app.accountTypeChecker(dataDictTooManyChild);
        assert.equal(result, false);
    });

    it("returns false if there is a missing 'account' key within the array child dictionary", function() {
        let result = app.accountTypeChecker(accountKeyCorrupted);
        assert.equal(result, false);
    });

    it("returns false if the 'account' key does not correspond to a dictionary", function(){
        let result = app.accountTypeChecker(accountNotDictionary);
        assert.equal(result, false);
    });

    it("returns false if the account dictionary does not contain exactly one child", function() {
        let result = app.accountTypeChecker(accountTooManyChildren);
        assert.equal(result, false);
    });

    it("returns false if the 'balance' key does not return a dictionary", function(){
        let result = app.accountTypeChecker(balanceKeyDoesNotReturnDict);
        assert.equal(result, false);
    });

    it("returns false if the balance dictionary does not contain exactly one element", function(){
        let result = app.accountTypeChecker(balanceDictTooManyChild);
        assert.equal(result, false);
    });

    it("returns false if the 'amount' key does not return a number", function(){
        let result = app.accountTypeChecker(amountDoesNotReturntNumber);
        assert.equal(result, false);
    });
});


describe("behaviours of func. accountTypeChecker when given valid data argument", function(){
    it("returns a string", function(){
        let result = app.accountTypeChecker(validDataArg);
        assert.typeOf(result, 'string');
    });

    it("should return either the string 'A' or the string 'B'", function(){
        let result = app.accountTypeChecker(validDataArg);
        assert.include(['A', 'B'], result);
    });

});