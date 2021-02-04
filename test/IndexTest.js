const assert = require('chai').assert;
const app = require('../index');
// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', function(){
    it('sayHello should return hello', function(){
        assert.equal(sayHelloResult, 'hello') ;
    });

    it('sayHello should return a string', function(){
        assert.typeOf(sayHelloResult, 'string');
    });

    it('addNumbers should above 5', function(){
        assert.isAbove(addNumbersResult, 5);
    });
});