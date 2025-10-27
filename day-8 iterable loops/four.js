// while loop
let numbers=[18,31,8,7,232,89,96,11]

let i=1;
let no_evens=0;
while(i<=numbers.length-1){
    if(numbers[i]%2===0) no_evens++;

   i++; 
}
console.log("No of evens",no_evens)