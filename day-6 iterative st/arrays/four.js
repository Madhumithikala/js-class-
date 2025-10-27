let employees=[
    {eid:101,ename:'madhu',gender:'M',esal:25000},
    {eid:102,ename:'sai',gender:'M',esal:35000},
    {eid:103,ename:'mounika',gender:'F',esal:45000},
    {eid:104,ename:'nandhini',gender:'F',esal:55000},
    {eid:105,ename:'chandra',gender:'M',esal:65000},
    {eid:106,ename:'nandhu',gender:'F',esal:75000}
]

// iterate array & print all employees names ?

for(let emp of employees){
    console.log(emp.eid)
    console.log(emp.ename)
    console.log(emp.gender)
    console.log(emp.esal)
}