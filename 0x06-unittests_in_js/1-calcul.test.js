const calculateNumber = require('./1-calcul.js');
const assert = require('assert');


describe('calculate Number', function () {
    describe('SUM', function () {
        it('should round and return the sum', function () {
            const a = 1.6;
            const b = 2;
            const expectedVal = 4;

            const theSum =  calculateNumber('SUM', a, b);

            assert.strictEqual(expectedVal, theSum);
        });
    });
    describe('SUBTRACT', function () {
        it('should round and subtract', function () {
            const a = 3;
            const b = 1.6;
            const expectedVal = -1;

            const theSubtracted = calculateNumber('SUBTRACT', a, b);

            assert.strictEqual(expectedVal, theSubtracted);
        });
    });
    describe('DIVIDE', function () {
        describe('if denominator rounds to 0', function () {
            it('should return Error', function (){
                const a = 5;
                const b = 0.3;
                const expectedVal = 'Error';

                const theDivided = calculateNumber('DIVIDE', a, b);

                assert.strictEqual(expectedVal, theDivided);
            });
        });
        describe('if the rounded denominator != 0', function () {
            it('should return the divided value', function () {
                const a = 5;
                const b = 0.7;
                const expectedVal = 5;

                const theDivided = calculateNumber('DIVIDE', a, b);

                assert.strictEqual(expectedVal, theDivided);
            });
        });
    });
});
