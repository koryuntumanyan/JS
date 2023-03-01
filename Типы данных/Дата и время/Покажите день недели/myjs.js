function getWeekDay(dt) {
    let daysofweek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return daysofweek[dt.getDay()]
}

let date = new Date();  // 3 января 2012 года
alert( getWeekDay(date) );