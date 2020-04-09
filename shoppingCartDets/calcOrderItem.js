import findById, { calc } from '../utils/utils.js';
import cart from './cartData.js';

const orderTotal = '';
    let calcOrderItem = 0;

    for (let i = 0; i < cart.length; i++) {
        const  = cart[i];
        const fruit = findById(fruits, .id);
        const lineTotal = calc(.quantity, fruit.price);
        orderTotal += lineTotal;
    }

    return roundCurrency(orderTotal);
    






//Loop the line items and use the calc function to calculate each line item and add it to the order total.
//Return the order total
//Note: you may need to round the order total to get your test to pass like you did with the line item total