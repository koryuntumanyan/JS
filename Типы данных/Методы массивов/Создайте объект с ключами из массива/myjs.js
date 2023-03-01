function groupById(arr) {
    let obj = {};
    let obj1 = obj;
    
	arr.forEach( item =>  obj[item.id] = item )

    /*arr.map( newobj => {
        obj[newobj.id] = newobj;
    })*/ //второй вариант

    return obj;
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
alert(usersById.john.name)