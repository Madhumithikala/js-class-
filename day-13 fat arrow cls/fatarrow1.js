
let ename = "Madhu";
let message = wish1(ename);
console.log(message);



function wish1(name) {
    return "Hello " + name + " Good Morning";
}
let msg = wish1("Balaji");
console.log(msg);


let greet = name => "Hi " + name + " Good Evening";
let res = greet("mani");
console.log(res);   