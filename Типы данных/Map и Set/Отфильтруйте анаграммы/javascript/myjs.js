function aclean(arr) {
    let map = new Map();
    for(let i of arr){
        let sort = i.toLowerCase().split('').sort().join('');
        map.set(sort, i);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );