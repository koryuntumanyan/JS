function factorial(n) {
    return n > 1 ?  n * factorial(n - 1) : n;
}

let n = +prompt("Введите число: ", 0);

alert( factorial(n) );