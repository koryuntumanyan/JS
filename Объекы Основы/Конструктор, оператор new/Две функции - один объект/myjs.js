/*
function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
*/
// возможно если функции возвращают объект, в таком случаи this игнорируется, и возвращается объект
//пример
let myobj = {
    name: 'John',
    age: 35,
};

function A() { return myobj }
function B() { return myobj }

let a = new A();
let b = new B();

alert(a == b); //true
