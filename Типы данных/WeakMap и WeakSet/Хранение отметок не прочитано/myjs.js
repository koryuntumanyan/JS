let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readmessage = new WeakSet(); //прочитанные сообщения храним в WeakMap, и если они удаляться из массива, отсюда тоже удаляться

readmessage.add(messages[2]);
readmessage.add(messages[0]);

alert("Message 3 is read ?: " + readmessage.has(messages[2]));

messages.pop();
alert();