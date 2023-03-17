function prtrevers(lst) {
    let arr = [];

    lst1 = lst;
    while(lst1) {
        arr.push(lst1.value)
        lst1 = lst1.next;
    }

    for(let i = arr.length - 1; i >= 0; i--)
        alert(arr[i]);
}

function prtreversrec(lst) {
    if (lst.next)
        prtreversrec(lst.next);

    alert( lst.value );
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

prtreversrec(list);