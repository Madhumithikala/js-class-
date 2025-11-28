let employees = [
    { eid: 101, ename: "Madhu", esal: 35000 },
    { eid: 102, ename: "Rahul", esal: 45000 },
    { eid: 103, ename: "Kaleel", esal: 55000 },
    { eid: 104, ename: "Mani", esal: 65000 },
    { eid: 105, ename: "Balaji", esal: 75000 },
    { eid: 106, ename: "Gnana", esal: 85000 },
    { eid: 107, ename: "Srinithi", esal: 95000 },
    { eid: 108, ename: "Chandu", esal: 35000 },
    { eid: 109, ename: "madhu", esal: 36000 },
    { eid: 110, ename: "prasanna", esal: 78000 }

]
let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            if (flag) {
                resolve("Data Inserted")
                employees.push(emp)
            } else {
                reject("Failed")
            }
        }, 4000)
    });
}

let getEmployees = () => {
    setTimeout(() => {
        let rows = "";
        for (let emp of employees) {
            rows = rows + `<tr>
                      <td>${emp.eid}</td>
                      <td>${emp.ename}</td>
                      <td>${emp.esal}</td>
                    </tr>
                    `
        }
        document.getElementById('data').innerHTML = rows
    }, 2000)
}
let exec = () => {
    createEmployee({ eid: 111, ename: "priya", esal: 45000 })
}
getEmployees()

/* createEmployee({ eid: 106, ename: "Priya", esal: 75000 })
    .then((msg) => {
        console.log(msg);
        getEmployees()
    })
    .catch((err) => {
        console.log(err);

    }) */
