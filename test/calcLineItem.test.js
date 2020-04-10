import { calcLineItem } from '../utils/utils.js';

const test = QUnit.test;

test('calLineItemReturnsQuantityTimesPrice', function(assert) {
    const quantity = 2;
    const price = 12;
    const expected = 24;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcLineItem (quantity, price);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});