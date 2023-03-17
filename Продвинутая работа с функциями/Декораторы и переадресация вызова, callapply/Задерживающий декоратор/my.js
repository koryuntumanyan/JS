function f(x) {
    alert(x);
}

function delay(func, ms) {
    return function (...args) {
        let nowthis = this;
        setTimeout(function () {
            func.apply(nowthis, args)
        }, ms)
    }
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 5000);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 5000 мс