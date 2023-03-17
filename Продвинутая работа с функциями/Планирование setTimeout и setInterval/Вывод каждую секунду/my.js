/*function printNumbers(from, to) {
    let tmInt = setInterval(function () {
        alert(from++);
        if (from > to)
            clearInterval(tmInt);
    }, 1000);
} *///setInterval

function printNumbers(from, to) {
    let tmTout = setTimeout(function f() {
        alert(from++);
        if (from <= to)
            setTimeout(f, 1000);
    }, 1000);
}

printNumbers(10, 15);

