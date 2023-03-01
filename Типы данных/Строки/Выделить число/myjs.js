function extractCurrencyValue(str) {
    return +str.slice(1);
}

let st = prompt("Введите стоимость: ", '');

alert(extractCurrencyValue(st));