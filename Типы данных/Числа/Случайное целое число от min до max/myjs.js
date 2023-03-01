function randomInteger(min, max) {
    if ( Math.random() > 0.5)
        return Math.floor(Math.random() * (max - min) + min);
    else
        return Math.ceil(Math.random() * (max - min) + min);
}

let min = +prompt("Введите минимальное число: ", 0);
let max = +prompt('Введите максимальное число: ', 1)
let iter = +prompt('Сколько рандомных чисел выдать ?: ', 5)
let res = ''

for(let i = 0; i < iter; i++){
    res +=  randomInteger(min, max);
    res += ' ';
}

alert(res);