function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0 counter2 независим от counter, потому что у нее независимое внешенее лексические окружение
alert( counter2() ); // 1