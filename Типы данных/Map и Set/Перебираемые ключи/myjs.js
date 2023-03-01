let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); //добавляем Array.from()

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");