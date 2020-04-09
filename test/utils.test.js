// IMPORT MODULES under test here:
// // import example from '../src/example.js';
import cart from '../shoppingCartDets/cartData.js';
import exoticFruits from '../data.js';
import { calcOrderTotal } from '../utils';

const test = QUnit.test;

test('CalcOrderTotal', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 45.00;
//price for items 1 - 5 - double on number 2

    //Act 
    // Call the function you're testing and set the result to a const
    const orderTotal = calcOrderTotal(cart, exoticFruits);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(orderTotal, expected);
});


//TDD test in /test/utils.js for a function that lives in /common/utils.js called calcOrderItem. This function takes the cart array and products array. Calculate the total of your cart data as the expected value.

// In the function:

// Create a variable to hold the order total.
// Loop the line items and use the calcLineItem function to calculate each line item and add it to the order total.
// Return the order total
// Note: you may need to round the order total to get your test to pass like you did with the line item total
