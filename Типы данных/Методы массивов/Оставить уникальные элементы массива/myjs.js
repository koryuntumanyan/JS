function unique(arr) {
    //return arr.map( elem => { if (!arr.shift().includes(elem)) return elem });
    let arr1 = [];
    for (let i of arr)
        if (!arr1.includes(i))
            arr1.push(i);
    return arr1;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );