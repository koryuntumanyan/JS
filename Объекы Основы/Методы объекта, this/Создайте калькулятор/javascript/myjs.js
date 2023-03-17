let calculator = {
    firstnum: 0,
    secnum: 0,

    read() {
        this.firstnum = +prompt("Введите певое число: ", '0');
        this.secnum = +prompt("Введите второе число: ", '0');
        let operation = prompt("+, -, *, / :?");

        switch (operation) {
            case '+':
                alert( this.sum(this.firstnum, this.secnum) );
                break;
            case '-':
                alert( this.sub(this.firstnum, this.secnum) );
                break;
            case '*':
                alert( this.mul(this.firstnum, this.secnum) );
                break;
            case '/':
                alert( this.sep(this.firstnum, this.secnum) );
                break;
            default:
                break;
        }
    },

    sum() {
        return this.firstnum + this.secnum;
    },

    mul() {
        return this.firstnum * this.secnum;
    },

    sep() {
        return this.firstnum / this.secnum;
    },

    sub() {
        return this.firstnum - this.secnum;
    }
};

calculator.read(); //от себя добавил еще деление и вычитание

/*

alert( calculator.sum() );
alert( calculator.mul() );
alert( calculator.sep() );
alert( calculator.sub() );

 */