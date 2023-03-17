function filterRangeInPlace(arr, a, b) {
    let i = 0;
    while(i < arr.length) {
        if (arr[i] >= a && arr[i] <= b) {
            i++;
            continue;
        }
        arr.splice(i, 1);
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr );
/*

let strarr = prompt("Введите массив: (n1, n2, ..., n)");
let arr = strarr.split(', ');
for(let i = 0; i < arr.length; i++)
    arr[i] = +arr[i];

let a = +prompt("Введите a: ");
let b = +prompt("Введите b: ");

filterRangeInPlace(arr, a, b);
alert( arr );
;*/