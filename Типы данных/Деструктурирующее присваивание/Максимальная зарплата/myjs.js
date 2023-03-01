function topSalary(salaries) {
    let topname = null;
    let topsal = 0;

    let mass = Object.entries(salaries);

    for(let [name, salary] of mass) {
        if (salary > topsal) {
            [topname, topsal] = [name, salary]
        }
    }

    return topname;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( topSalary(salaries) )

