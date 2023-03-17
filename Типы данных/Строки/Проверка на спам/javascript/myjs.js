function checkSpam(str) {
    str = str.toLowerCase();
    if (str.includes('viagra') || str.includes('xxx'))
        return true;
    return false;
}

alert(checkSpam(prompt("Введите текст: ", '')));