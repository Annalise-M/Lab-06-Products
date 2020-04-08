// IMPORT MODULES under test here:
// import example from '../src/example.js';

import findById from '../shopping cart dets/utils/utils.js';
const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const arrayOfItmes = [
        {
            id: 1,
            name: 'mangosteen'
        }, {
            id: 2,
            name: 'kumquat'
        }
    ];

    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(arrayOfItmes, 1);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.name, 'mangosteen');
});
