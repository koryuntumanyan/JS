let num;
while(true){
    num = prompt("Введите число больше 100: ", '');
    if (num == null) {
        alert("ok");
        break;
    }
    else if (Number(num)) {
        if (Number(num) > 100) {
            alert(num);
            break;
        }
        else
            continue;
    }
    else
        continue;
}
