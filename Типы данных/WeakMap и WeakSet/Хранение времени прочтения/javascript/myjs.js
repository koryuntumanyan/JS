let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let timeseen = new WeakMap();

timeseen.set(messages[2], '22:00');
timeseen.set(messages[0], '13:00');

alert("Когда прочитали первое сообщение ?: " + timeseen.get(messages[0]));

messages.shift();