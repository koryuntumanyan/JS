let user = {
    name: "Василий Иванович",
    age: 35
};

let js = JSON.stringify(user, null, 2);
alert(js);
let ob = JSON.parse(js);
alert(ob.name);