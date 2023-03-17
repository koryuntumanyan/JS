function sumInput() {
    let num = +prompt("Введите число: ");
    let mass = [];
    while(isFinite(num) && num != '' && num !== null) {
        mass.push(num);
        num = +prompt("Введите число: ");
    }
    let sumnum = 0;
    for(let i of mass)
        sumnum += i;
    return sumnum;
}

alert( sumInput() );