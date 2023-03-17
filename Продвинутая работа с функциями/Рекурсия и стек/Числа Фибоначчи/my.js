function fib(n) {
    let s = [1, 1];
    for(let i = 2; i <= n; i++)
        s.push(s[i-1] + s[i-2]);
    return s[n-1];
}


alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77));// 5527939700884757

let n = +prompt("Введите число: ", 0);

alert( fib(n) );