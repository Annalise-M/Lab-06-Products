import findById from '../utils/utils.js';

export default renderFruit;

function renderFruit(exoticFruit) {
    
    const li = document.createElement('li');
    li.className = exoticFruit.name;
    li.title = exoticFruit.description;

    const header = document.createElement('header');
    header.textContent = exoticFruit.name;
    li.appendChild(header);

    const img = document.createElement('img');
    img.src = exoticFruit.image;
    img.alt = exoticFruit.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = exoticFruit.id;
    button.addEventListener('click', () => {

        let cartInLocalStorage = localStorage.getItem('CART');

        let cart;

        if (cartInLocalStorage) {
            // turn the string cart into an object
            // set our js cart to this value
            cart = JSON.parse(cartInLocalStorage);
        }
        else {
            cart = [];
        }
        let itemInCart = findById(cart, exoticFruit.id);

        if (!itemInCart) {

            itemInCart = {

                id: exoticFruit.id,
                quantity: 1
            };

            cart.push(itemInCart);
        }
        else {
            itemInCart.quantity++;
        }

        const stringCart = JSON.stringify(cart);

        localStorage.setItem('CART', stringCart);

        alert('1 ' + exoticFruit.name + ' added to cart');

    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

