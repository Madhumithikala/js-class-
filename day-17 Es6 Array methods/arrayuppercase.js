// push method 

let enames = ["Madhu", "sai", "chandra", "kaki"]

// create new array ; with upper case emp names?
// using existing source -enames
let users = []
for (let ename of enames) {
    users.push(ename.toUpperCase())
}
console.log(users);


