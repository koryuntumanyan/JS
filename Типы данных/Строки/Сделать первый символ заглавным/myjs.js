function ucFirst(str) {
    if (str.length == 0)
        return str;
    return str[0].toUpperCase() + str.slice(1, );
}

alert(ucFirst(prompt("Введите текст: ", '')));