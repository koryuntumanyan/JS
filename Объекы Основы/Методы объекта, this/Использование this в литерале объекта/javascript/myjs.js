function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

/*ничего не отобразиться (ошибка), потому что функция makeUser не является методом объека user, а значит
 ref:this получает this функции makeUser а не объект user. */