let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( elem => ( { fullname:`${elem.name} ${elem.surname}`, id:elem.id} ));

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullname );