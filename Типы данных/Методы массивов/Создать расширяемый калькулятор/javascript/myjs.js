function Calculator() {

    this.methods = {

        '+': (a, b) => a + b,
        '-': (a, b) => a - b,

    };

    this.calculate = function (str) {

        let arr = str.split(' ');
        let a = +arr[0];
        let b = +arr[2];
        let oper = arr[1];

        if (!this.methods[oper] || isNaN(a) || isNaN(b))
            return NaN;
        return this.methods[oper](a, b);

    }

    this.addMethod = function (name, func) {

        this.methods[name] = func;

    }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8