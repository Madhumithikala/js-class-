let employees=[
    {"eid":101, "ename":"rahul","esal":2500 ,"erole":"HR"},
    {"eid":102, "ename":"sonia","esal":25000,"erole":"manager"},
    {"eid":103, "ename":"rahul gandhi","esal":34500,"erole":"Assit manager"},
    {"eid":104, "ename":"priyanka gandhi","esal":450000,"erole":"general manager"}
]
console.log(employees[0].ename) //rahul
console.log(employees[1].ename) //sonia
console.log(employees[2].ename) //rahul gandhi
console.log(employees[3].ename) //priyanka gandhi

console.log(employees[0]) //rahul
console.log(employees[1]) //sonia
console.log(employees[2]) //rahul gandhi
console.log(employees[3]) // priyanka gandhi


for(let emp of employees){
    console.log(emp.ename)
}

