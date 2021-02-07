const accountTypeChecker = require('../src/app').accountTypeChecker;
const validDataArg = require('./appTestHelper').validDataArg;
const dataNotEnoughChildren = require('./appTestHelper').dataNotEnoughChildren;
const dataArrayWithNonDictChild = require('./appTestHelper').dataArrayWithNonDictChild;
const dataDictTooManyChild = require('./appTestHelper').dataDictTooManyChild;
const accountKeyCorrupted = require('./appTestHelper').accountKeyCorrupted;
const accountNotDictionary = require('./appTestHelper').accountNotDictionary;
const accountTooManyChildren = require('./appTestHelper').accountTooManyChildren;
const balanceKeyDoesNotReturnDict = require('./appTestHelper').balanceKeyDoesNotReturnDict;
const balanceDictTooManyChild = require('./appTestHelper').balanceDictTooManyChild;
const amountDoesNotReturntNumber = require('./appTestHelper').amountDoesNotReturntNumber;
const validDataArgTypeA = require('./appTestHelper').validDataArgTypeA;
const assert = require('chai').assert;

// common assertions
function resultFalse(res) {
    assert.equal(res, false);
}

describe('Behaviour of accountTypeChecker func. for errors in given arguments', function () {
    it('returns false if the argument given is not an array', function () {
        let result = accountTypeChecker('string');
        resultFalse(result);
    });

    it('it does not return false when a valid data argument is passed to it', function () {
        let result = accountTypeChecker(validDataArg);
        assert.notEqual(result, false);
    });

    it('returns false if the array provided contains less than three children', function(){
        let result = accountTypeChecker(dataNotEnoughChildren);
        resultFalse(result);
    });

    it('returns false if the array provided contains any non-dictionary children', function(){
        let result = accountTypeChecker(dataArrayWithNonDictChild);
        resultFalse(result);
    });

    it('returns false if any of the array child dictionaries does not contain exactly 2 children', function(){
        let result = accountTypeChecker(dataDictTooManyChild);
        resultFalse(result);
    });

    it("returns false if there is a missing 'account' key within the array child dictionary", function() {
        let result = accountTypeChecker(accountKeyCorrupted);
        resultFalse(result);
    });

    it("returns false if the 'account' key does not correspond to a dictionary", function(){
        let result = accountTypeChecker(accountNotDictionary);
        resultFalse(result);
    });

    it("returns false if the account dictionary does not contain exactly one child", function() {
        let result = accountTypeChecker(accountTooManyChildren);
        resultFalse(result);
    });

    it("returns false if the 'balance' key does not return a dictionary", function(){
        let result = accountTypeChecker(balanceKeyDoesNotReturnDict);
        resultFalse(result);
    });

    it("returns false if the balance dictionary does not contain exactly one element", function(){
        let result = accountTypeChecker(balanceDictTooManyChild);
        resultFalse(result);
    });

    it("returns false if the 'amount' key does not return a number", function(){
        let result = accountTypeChecker(amountDoesNotReturntNumber);
        resultFalse(result);
    });
});


describe("behaviours of func. accountTypeChecker when given valid data argument", function(){
    it("returns a string", function(){
        let result = accountTypeChecker(validDataArg);
        assert.typeOf(result, 'string');
    });

    it("should return either the string 'A' or the string 'B'", function(){
        let result = accountTypeChecker(validDataArg);
        assert.include(['A', 'B'], result);
    });

    it("should return 'B' when the amount changes by the same amount every month", function() {
        let result = accountTypeChecker(validDataArg);
        assert.equal(result, 'B');
    });

    it("should return 'A' when the amount changes by differing amounts", function() {
        let result = accountTypeChecker(validDataArgTypeA);
        assert.equal(result, 'A');
    });

});