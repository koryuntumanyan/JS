function filterRange(arr, a, b) {
    /*let newarr = [];
    for (let i of arr) {
        if (i >= a && i <= b)
            newarr.push(i);
    }*/
    let newarr = arr.filter( elem => elem >= a && elem <= b);
    return newarr;
}

let strarr = prompt("Введите массив: (n1, n2, ..., n)");
let arr = strarr.split(', ');
for(let i = 0; i < arr.length; i++)
    arr[i] = +arr[i];

let a = +prompt("Введите a: ");
let b = +prompt("Введите b: ");

let filtered = filterRange(arr, a, b);
alert( filtered );

alert( arr );