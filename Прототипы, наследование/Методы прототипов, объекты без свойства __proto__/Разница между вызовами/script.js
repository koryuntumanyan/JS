function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit, потому что this = rabbit
Rabbit.prototype.sayHi(); // undefined, потому что this = Rabbit.prototype
Object.getPrototypeOf(rabbit).sayHi(); // undefined, потому что this = Rabbit.prototype
rabbit.__proto__.sayHi(); // undefined, потому что this = Rabbit.prototype