let employees = [
    { eid: 101, ename: "rahul", gender: "Male" },
    { eid: 102, ename: "priyanka", gender: "Female" },
    { eid: 103, ename: "kajal", gender: "Female" },
    { eid: 104, ename: "madhu", gender: "Male" },
    { eid: 105, ename: "ntr", gender: "Male" }
]
// find method
let emp = employees.find((emp) => {
    return emp.eid === 101;
})

console.log(emp);

// find method
let emp1 = employees.find((emp1) => {
    return emp1.eid === 105

})
console.log(emp1);




