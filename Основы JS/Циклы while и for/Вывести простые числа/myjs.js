let num;
do{
    num = +prompt('Введите число: ', '')
}while(+num == null);
mycyc: for(let i = 2; i <= num; i++){
    for(let j = 2; j <= i**(1/2); j++){
        if (i%j == 0)
            continue mycyc;
    }
    alert(i);
}