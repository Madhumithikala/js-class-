 //create
 let emp={
    "eid":101,
    "ename":"Rahul",
    "esal":45000.45,
    "eemail":"madhu@gamil.com"
}

//read
console.log(emp)
console.log(emp.eid)
console.log(emp.ename)
console.log(emp.esal)
console.log(emp.eloc)
console.log(emp.eemail)

let specification={
    "fits":"Regular",
    "size":'S'
}

//update

emp.esal=55000.78;
console.log(emp)

emp.gender='M';
console.log(emp)

//read
console.log(specification)


//delete
delete emp.gender
console.log(emp)
