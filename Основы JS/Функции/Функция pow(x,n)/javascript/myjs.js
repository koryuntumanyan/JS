function pow(x, n){
    return x**n;
}

let a = +prompt("Число: ", '');
let b = +prompt("Степень: ", '');
((b < 1) || (((b * 10)%10) != 0)) ? alert(`Степень ${b} не натуральное, используете только натуральные числа`) :alert(pow(a, b));