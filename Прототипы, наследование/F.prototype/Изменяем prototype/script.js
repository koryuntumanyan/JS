function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {}

alert( rabbit.eats ); // true, мы уже создали объект, поэтому если менять
                      // prototype функции конструктора, то в объекте ничего не поменяется

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // false, потому что мы меняем объект по ссылке

delete rabbit.eats;

alert( rabbit.eats ); // true, потому что в rabbit нет свойтво eats, оно берется из prototype eats: true

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined, потому что нет такого свойства