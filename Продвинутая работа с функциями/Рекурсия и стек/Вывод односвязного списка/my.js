function prt(lst) {
    let lst1 = lst;
    while(lst1){
        alert(lst1.value)
        lst1 = lst1.next;
    }
}

function prtrec(lst) {
    for (let i in lst) {
        if (typeof lst[i] === 'object')
            prtrec(lst[i]);
        else
            alert(lst[i]);
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

prtrec(list);