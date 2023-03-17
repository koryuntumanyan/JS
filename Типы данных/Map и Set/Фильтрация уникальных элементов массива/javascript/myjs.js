function unique(arr) {
    let set = new Set();
    for(let i of arr)
        set.add(i);
    return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O