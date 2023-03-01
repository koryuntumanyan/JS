/*let result;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}*/

let a = +prompt("Введите первое число: ", '');
let b = +prompt("Введите второе число: ", '');
let result;
result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);

