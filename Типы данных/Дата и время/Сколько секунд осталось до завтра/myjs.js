function getSecondsToTomorrow() {
    let now = new Date();
    let end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((end - now) / 1000);
}

alert( getSecondsToTomorrow() )

