function add(a, b, op) {
    if (op === 'sum') {
        return a + b;
    }
    if (op === 'mul') {
        return a * b
    }
}

let s1 = add(20, 30, 'sum')
let s2 = add(20, 5, 'mul')
console.log(s1);
console.log(s2);

