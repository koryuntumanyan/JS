function Obje(name) {
    this.name = name;
}

let obj = new Obje('John');
alert(obj.name) // John
let obj2 = new obj.constructor('Anna');
alert(obj2.name); // Anna

function Obje2(name) {
    this.name = name;
}

Obje2.prototype = {
    name: 'Pete'
}

let obj21 = new Obje2('Smith');
alert(obj21.name);
let obj22 = new obj21.constructor("King");
alert(obj22.name); // undefined