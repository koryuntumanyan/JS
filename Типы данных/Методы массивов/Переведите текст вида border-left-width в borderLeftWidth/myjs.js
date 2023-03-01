"use strict"
function camelize(str) {
    let mass = str.split('-');
    //проверяем наличие '-' в конце массива
    while(mass[mass.length - 1] == '') {
        mass.length = mass.length - 1;
    }
    //проверяем наличие нескольких '--'
    mass = mass.map( (elem, index) => {
        if (index == 0)
            return elem;
        while (mass[index] == '') {
            mass.splice(index, 1);
        }
        return mass[index];
    });

    mass = mass.map( (elem, index) => index == 0 ? elem : (elem[0].toUpperCase() + elem.slice(1)) );

    return mass.join('');
}

alert( camelize("background-color") ) //== 'backgroundColor';
alert( camelize("list-style-image") ) //== 'listStyleImage';
alert( camelize("-webkit--transition") ) //== 'WebkitTransition';
alert ( camelize('-hello-world---he--') )