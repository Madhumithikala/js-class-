let numbers = [1, 2, 3, 4, 11, 8, 4, 3, 2];
//create new array based on existing array
let new_eids = []
for (let num of numbers) {
    new_eids.push(num);
}
console.log(new_eids);


//merge arrays
let arr1 = [1, 2, 3, 3, 4, 5];
let arr2 = [4, 5, 6];
let c = [...arr1, ...arr2];
console.log(c);

// merging objects
let emp = { 'ename': 'Alice', 'email': 'alice@example.com' };
let details = { 'email': 'alice@example.com', 'location': 'NYC' };
let emp_details = { ...emp, ...details };
console.log(emp_details);
//extending objects
let emp_extended = { ...emp, 'phone': '123-456-7890' };
console.log(emp_extended);