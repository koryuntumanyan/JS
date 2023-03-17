function shuffle(array) {
    array.sort(() => Math.random().toFixed(20) - 0.5);
}

let arr = [1, 2, 3];

let i = 0;

while(i++ != 20) {
    shuffle(arr);
    alert(arr);
}

