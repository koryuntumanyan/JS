let hamster = {
    stomach: [],

    eat(food) {
        //this.stomach.push(food);
        this.stomach = [food]; //теперь работает правильно
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple

/*
у второго тоже появляется еда, потому что this.stomach.push(food) движок ищет stomach в объекте speedy, но не находит
и по цепочке находит его в объекте hamster, там и добавляет
можно исправить, переписав this.stomach.push(food) на this.stomach = [food]
 */