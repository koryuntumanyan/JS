function inBetween(a, b) {
    return function(c) {
        return c >= a && c <= b;
    };
}

function inArray(arr) {
    return function (c) {
        return arr.includes(c);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2