function sumSalaries(obj) {
    let sum = 0;
    let mass = Object.values(obj);
    for(let i of mass)
        sum += i;
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650