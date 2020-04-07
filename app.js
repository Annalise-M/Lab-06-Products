import exoticFruits from './data.js';
import renderFruit from './renderFruit.js';

const container = document.getElementById('container');

for (let i = 0; i < exoticFruits.length; i++) {
    const fruit = exoticFruits[i];
    const el = renderFruit(fruit);
    container.appendChild(el);
    
}