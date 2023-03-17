let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi(); //выдаст ошибку, потому что функция была объявлена внутри блока if