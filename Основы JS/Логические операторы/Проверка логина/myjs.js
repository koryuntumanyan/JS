let userName = prompt("Введите логин: ", '');
if (userName === 'Админ'){
    let password = prompt("Введите пароль: ", '');
    (password === "Я Главный") ? alert("Здравствуйте") : (password === null || password == '') ? alert("Отменено") : alert('Неверный пароль')
}
else if (userName === null || userName ===''){
    alert("Отменено");
}
else{
    alert("Я вас не знаю!")
}