let employees=[{"eid":1,"ename":"Nanni","gender":"Female"},
    {"eid":2,"ename":"Corrie","gender":"Male"},
    {"eid":3,"ename":"Ellery","gender":"Male"},
    {"eid":4,"ename":"Debora","gender":"Female"},
    {"eid":5,"ename":"Melony","gender":"Non-binary"},
    {"eid":6,"ename":"Noelle","gender":"Female"},
    {"eid":7,"ename":"Friederike","gender":"Female"},
    {"eid":8,"ename":"Conrado","gender":"Male"},
    {"eid":9,"ename":"Grethel","gender":"Female"},
    {"eid":10,"ename":"Dav","gender":"Male"},
    {"eid":11,"ename":"Chicky","gender":"Female"},
    {"eid":12,"ename":"Jaymee","gender":"Female"},
    {"eid":13,"ename":"Franz","gender":"Agender"},
    {"eid":14,"ename":"Mallorie","gender":"Female"},
    {"eid":15,"ename":"Thornie","gender":"Male"},
    {"eid":16,"ename":"Ash","gender":"Male"},
    {"eid":17,"ename":"Gretal","gender":"Female"},
    {"eid":18,"ename":"Erny","gender":"Male"},
    {"eid":19,"ename":"Harmony","gender":"Female"},
    {"eid":20,"ename":"Viviene","gender":"Genderfluid"},
    {"eid":21,"ename":"Jojo","gender":"Female"},
    {"eid":22,"ename":"Caresa","gender":"Female"},
    {"eid":23,"ename":"Nick","gender":"Male"},
    {"eid":24,"ename":"Leshia","gender":"Female"},
    {"eid":25,"ename":"Rube","gender":"Male"},
    {"eid":26,"ename":"Berna","gender":"Female"},
    {"eid":27,"ename":"Jillie","gender":"Female"},
    {"eid":28,"ename":"Dulcie","gender":"Female"},
    {"eid":29,"ename":"Gualterio","gender":"Male"},
    {"eid":30,"ename":"Sam","gender":"Female"},
    {"eid":31,"ename":"Corbett","gender":"Male"},
    {"eid":32,"ename":"Konstantin","gender":"Male"},
    {"eid":33,"ename":"Mahmud","gender":"Male"},
    {"eid":34,"ename":"Boyd","gender":"Male"},
    {"eid":35,"ename":"Dermot","gender":"Male"},
    {"eid":36,"ename":"Delmar","gender":"Male"},
    {"eid":37,"ename":"Renaud","gender":"Male"},
    {"eid":38,"ename":"Fredek","gender":"Male"},
    {"eid":39,"ename":"Charity","gender":"Polygender"},
    {"eid":40,"ename":"Demetria","gender":"Female"},
    {"eid":41,"ename":"Silvia","gender":"Female"},
    {"eid":42,"ename":"Benedetto","gender":"Male"},
    {"eid":43,"ename":"Killy","gender":"Male"},
    {"eid":44,"ename":"Matti","gender":"Non-binary"},
    {"eid":45,"ename":"Barron","gender":"Male"},
    {"eid":46,"ename":"Farleigh","gender":"Male"},
    {"eid":47,"ename":"Zahara","gender":"Female"},
    {"eid":48,"ename":"Paulie","gender":"Male"},
    {"eid":49,"ename":"Ximenes","gender":"Male"},
    {"eid":50,"ename":"Guinna","gender":"Polygender"}
]

// console.log(typeof(employees))

// console.log(employees)

console.log(employees.length)

// wap to print no of male employees uaing
//1.for loop
//2.while loop
//3.do while loop


let male_emps=0;
for(let emp of employees){

    if(emp.gender==="Male"){

      male_emps++;
    }
}

console.log(male_emps)





