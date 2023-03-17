function getLastDayOfMonth(year, month) {
    let dt = new Date(year, month + 1);
    dt.setDate(dt.getDate()-1);
    return dt.getDate();

}

getLastDayOfMonth(2012, 1)