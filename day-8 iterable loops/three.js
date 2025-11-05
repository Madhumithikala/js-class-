let numbers=[18,31,8,7,232,89,96,11]

// wap to print no of even no using 1.for loop
// 2.while loop
// 3.do while loop
// 4.for-of
let no_evens=0;
for(let i=0; i<=numbers.length-1; i++){
    if(numbers[i]%2===0){
        no_evens ++
    }
}

console.log("No of evens",no_evens)