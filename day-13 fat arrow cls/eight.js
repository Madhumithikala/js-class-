function greet() {
    console.log(this);
}
greet();

let greetArrow = () => {
    console.log(this);
}
greetArrow();


let wish = name => {
    return "Hi " + name + " Good Afternoon";
}
let message = wish("Kumar");
console.log(message);

