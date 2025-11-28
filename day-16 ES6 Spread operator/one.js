//using spread operator with Set

let numbers = [1, 2, 3, 4, 5];
numbers = new Set([...numbers])
console.log(numbers);

//removing duplicates from array using Set and spread operator
let enames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Madhu', 'Alice'];
enames = [...new Set(enames)]
console.log(enames);


