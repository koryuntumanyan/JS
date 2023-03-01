function Calculator () {
    this.firstnum = 0;
    this.secnum = 0;

    this.read = function() {
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
    };

    this.sum = function() {
        return this.firstnum + this.secnum;
    };

    this.mul = function() {
        return this.firstnum * this.secnum;
    };

    this.sep = function() {
        return this.firstnum / this.secnum;
    };

    this.sub = function() {
        return this.firstnum - this.secnum;
    };
}; //от себя добавил еще деление и вычитание

let calc = new Calculator();

calc.read();