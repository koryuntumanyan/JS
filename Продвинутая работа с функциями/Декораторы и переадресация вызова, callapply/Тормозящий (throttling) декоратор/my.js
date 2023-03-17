function f(a) {
    console.log(a)
}

function throttle(func, ms) {
    let isthrot = false;
    let savedthis;
    let savedargs;
    function wrapper() {
        if (isthrot) {
            savedthis = this;
            savedargs = arguments;
            return;
        }

        func.apply(this, arguments);
        isthrot = true;

        setTimeout(function () {
            isthrot = false;
            if (savedargs) {
                wrapper.apply(savedthis, savedargs);
            }
        }, ms);
    }

    return wrapper;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано