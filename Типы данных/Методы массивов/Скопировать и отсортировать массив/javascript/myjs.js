function copySorted(arr) {
    let copyarr = arr.slice();
    return copyarr.sort( (a, b) => a.localeCompare(b));
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)