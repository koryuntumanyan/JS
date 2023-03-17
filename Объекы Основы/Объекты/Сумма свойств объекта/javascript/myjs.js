/*function isEmpty(obj) {
    for (let i in obj) {
        return false;
    }
    return true;
}*/

function sum_salaries(obj) {
    /*if ( isEmpty(obj) ) проверить объект на пустоту можно и функцией, написанной ранее.
        return 0;*/
    let summary = 0;
    for (let i in obj) {
        summary += obj[i];
    }
    return summary;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

salaries.sum = sum_salaries(salaries);
alert(salaries.sum);