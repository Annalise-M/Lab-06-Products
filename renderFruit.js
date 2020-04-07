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
    button.value = exoticFruit.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;

}

