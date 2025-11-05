function haa(){
    document.getElementById("btn1").style.backgroundColor="yellow"
}
function changecolor1(){
    document.getElementById("btn2").style.backgroundColor="green"
}
function changecolor2(){
    document.getElementsByTagName("button")[1].style.backgroundColor="red"
}
function changecolor3(){
    document.querySelector(".btn4").style.backgroundColor="blue"
}
function changecolor4(){
    let name=document.getElementsByClassName("btn5")[0]
    alert(name)
    .style.backgroundColor="green"
}
function changecolor5(){
    document.getElementById("btn6").style.backgroundColor="pink"

}
function changecolor6(){
    let input = document.getElementById("btn7");
    input.value = input.value.toUpperCase();
    input.style.backgroundColor="yellow"
 
}