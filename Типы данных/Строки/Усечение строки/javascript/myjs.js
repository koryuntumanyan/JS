function truncate(str, maxlength) {
    if (str.length > maxlength)
        str = str.slice(0, maxlength - 1) + '…';
    return str;
}

let st = prompt("Введите текст: ", '');
let mxlen = +prompt("Введите максимальную длину: ", 1);

alert(truncate(st, mxlen));