const assert = require('chai').assert;
const expect = require('chai').expect;
const app = require('../app');
// Results

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

const typeAAccountBalanceHistory = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 150 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]

const typeBAccountBalanceHistory = validAccountBalanceHistory





const validAccountBalanceHistoryResult = app.accountTypeChecker(validAccountBalanceHistory);

describe('App', function () {
    it('accountTypeChecker should return a string', function () {
        assert.typeOf(validAccountBalanceHistoryResult, 'string');
    });

    it("accountTypeChecker should return either 'A' or 'B' ", function () {
        result = ['A', 'B'].includes(validAccountBalanceHistoryResult);
        assert.equal(result, true);
    });

    // it('should return an error if the input parameter is not an array', function () {
    //     // result = app.accountTypeChecker('string');
    //     expect(function () {
    //         app.accountTypeChecker('string');
    //     }).to.throw('Property does not exist in model schema.');
    // });

    it('accountTypeChecker should return B if given a type B data-set', function(){
        result = app.accountTypeChecker(typeBAccountBalanceHistory);
        assert.equal(result, 'B');
    });

});