
// object destructure

let emp = {
    eid: '101',
    ename: 'rahul',
    details: {
        email: 'rahul@gmail.com',
        location: 'Bengalore',
        phone: '8919339926'

    }
}

/* let { ename } = emp;
console.log(ename); */

let { ename, details } = emp;
let { location } = details;
let { phone } = details;

console.log(ename);
console.log(location);
console.log(phone);






