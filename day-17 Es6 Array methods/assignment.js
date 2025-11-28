

let enames = ["rahul", "sonia", "priya", "modi"];

enames.forEach(function (name) {
    console.log(name.toUpperCase());
});


//Use map() to create a new array containing the lengths of each name.

let namelengths = enames.map(function (name) {
    return name.length;
})
console.log(namelengths);

//Use filter() to get names that start with the letter 's'.

let sname = enames.filter(function (name) {
    return name.startsWith('s')

})
console.log(sname);

//Use push() to add 'amit' to the end of the array.
enames.push('amit')
console.log(enames)

//Use pop() to remove the last element from the array.
enames.pop()
console.log(enames);

enames.shift()
console.log(enames);

enames.unshift('madhu')
console.log(enames);




