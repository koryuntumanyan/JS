let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
/*
    в каждом методе возвращаем this, напирмер если метод up() возвращает this (сам объект), если мы
    пишем up().up() метот up() выполняется, и возвращает this, объект который вызывает метод up() у нас ladder
    => up().up() = this.up() = ladder.up(), и так далее по цепочке.
 */