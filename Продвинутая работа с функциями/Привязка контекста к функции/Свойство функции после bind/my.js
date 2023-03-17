function sayHi() {
    alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

alert( bound.test ); //undefined, потому что результат bind-а другой объект, там нет свойства test