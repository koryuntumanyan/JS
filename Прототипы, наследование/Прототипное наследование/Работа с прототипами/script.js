let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

alert( rabbit.jumps ); // true берется из rabbit

delete rabbit.jumps;

alert( rabbit.jumps ); // null берется из animal потому что удалили у rabbit

delete animal.jumps;

alert( rabbit.jumps ); // undefined, такого свойства нет