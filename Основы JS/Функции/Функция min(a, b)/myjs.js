function min(a, b){
    return (a < b) ? a : b;
}

let a = +prompt("Первое число: ", '');
let b = +prompt("Второе число: ", '');
alert(min(a, b));