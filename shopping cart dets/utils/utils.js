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

export default findById;