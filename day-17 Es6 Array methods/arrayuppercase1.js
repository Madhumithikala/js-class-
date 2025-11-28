// using  forEach method 

let enames = ["madhu", "rahul", "gandhi", "balaji", "prakash"]

let emp = []
enames.forEach((emp) => {
    console.log(emp); // for each  iterate array & executes provided at every time 
})


enames.forEach(function () {
    console.log("GM");

})


// using map method
let new_enames = enames.map((ename) => {
    return ename.toUpperCase()

})
console.log(new_enames);

// using forEach method 
let new_unames = enames.forEach((ename) => {
    return ename.toUpperCase()

})
console.log(new_unames);

// WAP to print all even numbers in a new array
//without filter method

let numbers = [11, 12, 13, 56, 78, 35, 41, 8, 15]

let even_numbers = []
for (let num of numbers) {
    if (num % 2 === 0) {
        even_numbers.push(num);
    }
}
console.log(even_numbers);

// with filter  and implicit return
let even = numbers.filter((num) => {
    return (num % 2 === 0);
})
console.log(even);

// with filter method

let evens = numbers.filter(no => no % 2 === 0)  // filter are iterate the array

console.log(evens);




