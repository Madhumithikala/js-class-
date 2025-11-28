let employees = [{ eid: 101, ename: 'rahul', esal: 45000 },
{ eid: 102, ename: 'priyanka', esal: 55000 },
{ eid: 103, ename: 'gnana', esal: 65000 },
{ eid: 104, ename: 'balaji', esal: 85000 },
{ eid: 105, ename: 'chandu', esal: 95000 },
{ eid: 106, ename: 'srinithi', esal: 100000 }
]

let createEmployees = (emp, Callback) => {
    setTimeout(() => {
        employees.push(emp);
        Callback()
    }, 4000)
}

let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        for (let emp of employees) {
            rows = rows + `<tr>
                <td>${emp.eid}</td>
                <td>${emp.ename}</td>
                <td>${emp.esal}</td>
                </tr>`
        }
        document.getElementById('tb_data').innerHTML = rows
    }, 1000)
}
createEmployees({ eid: 107, ename: 'madhu', esal: 45000 }, getEmployees)
//getEmployees()