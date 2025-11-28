//concat method
let arr = [1, 2, 3, 4, 5]
let newarr = arr.concat(6, 7, 8)
console.log(newarr) //output: [1, 2, 3, 4, 5, 6, 7, 8]

//concat method
let arr2 = ['madhu', 'gnanesh', 'balaji', 'chandra']
let newarr2 = arr2.concat('sai', 'chandu')//adding new elements to the existing array
console.log(newarr2)
//output: ['madhu', 'gnanesh', 'balaji', 'chandra', 'sai', 'chandu']


//slice method
let arr3 = [10, 20, 30, 40, 50]
let newarr3 = arr3.slice(2, 4) //returns elements from index 2 to index 4 (not including index 4)
console.log(newarr3)
//output: [30, 40]

//splice method 
let arr4 = ['apple', 'banana', 'cherry', 'date', 'fig']
let newarr4 = arr4.splice(1, 3) //print elements from index 1 to index 3 (not including index 3)
console.log(newarr4)
//output: ['banana', 'cherry', 'date']

//splice method
let arr5 = ['apple', 'banana', 'cherry', 'date', 'fig']
arr5.splice(1, 3) //removes elements from index 1 to index 3 (not including index 3)
console.log(arr5)
//output: ['apple', 'fig']

//forEach method
let arr6 = [11, 22, 33, 44, 55, 66]
arr6.forEach(Element => console.log(Element * 3))//prints each element multiplied by 3

let arr8 = ['a', 'b', 'c', 'd', 'e']
arr8.forEach(Element => console.log(Element.toUpperCase()))//prints each element in uppercase
//output: A B C D E

//map method
let arr7 = [5, 10, 15, 20, 25]
let newarr7 = arr7.map(Element => Element + 5) //adds 5 to each element and returns a new array
console.log(newarr7)
