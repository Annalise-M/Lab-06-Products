import { renderLineItem } from '../utils/render-line-item.js';

const test = QUnit.test;

test('renderLineItem', function(assert) {
    
    const cartItem = {
        id: 'item4',
        quantity: 1,
    };

    const fruit = {
        id: 'item4',
        name: 'durian',
        image: 'https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/images/methode/2018/04/29/4241cf12-4b60-11e8-85b3-af25d27017e0_1280x720_120045.JPG?itok=tM-o-d52',
        description: 'Often called, the King of fruits!',
        category: 'fruit',
        price: 12.00
    };

    const expected = '<tr><td class="align-left">durian</td><td>1</td><td>$12.00</td><td>$12.00</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const
    const lineItem = renderLineItem(cartItem, fruit);
    const result = lineItem.outerHTML;
    
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});