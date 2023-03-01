function formatDate(date) {
    let now = new Date();
    if (now - date < 1000)
        return 'прямо сейчас';
    else if (now - date < 60 * 1000)
        return `${Math.round((now - date) / 1000)} сек. назад`;
    else if (now - date < 60 * 60 * 1000)
        return `${Math.round((now - date) / 1000 / 60)} мин. назад`;
    else {
        let dt = [date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`,
            (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : `0${date.getMonth() + 1}`,
            date.getFullYear() % 100]
        return `${dt.join('.')} ${date.getHours()}:${date.getMinutes()}`;
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

