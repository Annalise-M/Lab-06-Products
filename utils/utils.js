function findById(array, id) {

    let foundItem;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item.id === id) {
            foundItem = item;
        }
    }
    return foundItem;
}
function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export default findById;

export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export function calcLineItem(quantity, price) {
    
    const orderTotal = quantity * price;
    
    return roundCurrency(orderTotal);
    
}


export function calcOrderTotal(cart, fruits) {
    let orderTotal = 0;
    
    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const fruit = findById(fruits, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, fruit.price);
        
        orderTotal += lineTotal;
    }
    
    return orderTotal;
}