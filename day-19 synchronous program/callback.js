
function sum(a, b, c) {
    return a + b + c;

}
function multi(a, b, c) {
    return a * b * c;
}

function calc(a, b, c, callback) {
    return callback(a, b, c)
}
r1 = calc(10, 20, 30, sum)
console.log(r1);
r2 = calc(10, 20, 30, multi)
console.log(r2);

