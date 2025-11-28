let sum = (a, b, c) => {
    return a + b + c;
}
let multi = (a, b, c) => {
    return a * b * c;
}

let calc = (a, b, c, callback) => {
    return callback(a, b, c)

}
r1 = calc(20, 30, 40, sum)
console.log(r1);
r2 = calc(20, 40, 50, multi)
console.log(r2);

