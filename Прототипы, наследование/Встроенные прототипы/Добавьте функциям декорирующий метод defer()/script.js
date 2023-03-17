function f(a, b) {
    alert( a + b );
}

Function.prototype.defer = function (ms) {
    let savedthis = this;
    return function (...args) {
        setTimeout(() => savedthis.apply(this, args), ms);
    };
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.