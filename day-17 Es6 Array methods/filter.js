// filter method

let employees = [
    { eid: 101, ename: "rahul", gender: "Male" },
    { eid: 102, ename: "priyanka", gender: "Female" },
    { eid: 103, ename: "kajal", gender: "Female" },
    { eid: 104, ename: "madhu", gender: "Male" },
    { eid: 105, ename: "ntr", gender: "Male" }
]

let Male_employees = employees.filter((emp) => {
    return emp.gender === 'Male'
})

console.log(Male_employees);

//filter method
let Female_employees = employees.filter((emp) => {
    return emp.gender === 'Female'
})

console.log(Female_employees);

let Female_employee = []
for (let emp of employees) {
    if (emp.gender === 'Female') {
        Female_employee.push(emp)
    }
}








