function checkAge(age) {
    /*if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }*/
    return (age > 18) ? true : confirm('Родители разрешили?'); //вариант с ?
    return (age > 18)  || confirm('Родители разрешили?') // вариант с ||
}

let age = +prompt('Введите возраст: ', '');
checkAge(age);
