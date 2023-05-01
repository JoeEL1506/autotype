let display2 =document.getElementById('display2');
let display1 =document.getElementById('display1');
let canClear = false
let op;
let opp;
let sign='';

// clear the screen to zero
function clearScreen(){
    display2.innerHTML='0'
    display1.innerHTML=''
}
//for display on the screen
function display(message) {
    if (canClear) {
        canClear=false
        display2.innerHTML=''
    }
    if (display2.innerHTML=='0') {
        display2.innerHTML=''
    }
        display2.innerHTML+=message;

        opp=display2.innerHTML
}

//operators function
function operator(message){
    if(sign){
       equal
    }
    if (sign=message){
        display1.innerHTML= display2.innerHTML + message
    }
    canClear=true
    // display1.innerHTML= display2.innerHTML + message
    op=display2.innerHTML
}

function backspace() {
    let val = document.getElementById('display2').innerHTML
    val.toString
    display2.innerHTML =val.slice(0, -1)
    if (display2.innerHTML==''){
        display2.innerHTML='0'
    }
}

// function backspace() {
//     let val = document.getElementById('display2').innerHTML
//     val.toString
//     display2.innerHTML =val.substring(0, display2.innerHTML.lenght-1)
//     if (display2.innerHTML==''){
//         display2.innerHTML='0'
//     }
// }  

// to do the function of equal to
function equal() {
    if (sign =='+') {
        display2.innerHTML= Number(op) + Number(opp)
        
    }
    else if (sign=='-'){
        display2.innerHTML= Number(op) - Number(opp)
    }
    else if (sign=='/'){
        display2.innerHTML= Number(op) / Number(opp)
    }
        else if (sign=='*'){
        display2.innerHTML= Number(op) * Number(opp)
    }
   display1.innerHTML+= opp+ '=';
   
}
function root() {
    display2.innerHTML =`&#8730(${display1.innerHTML})`
    display1.innerHTML = Math.sqrt(display1.innerHTML)
}
function square() {
    display2.innerHTML =`sqr(${display1.innerHTML})`
    display1.innerHTML = Math.pow(display1.innerHTML, 2)
}
function percentage() {
    display2.innerHTML =display2.innerHTML/100
}
function inverse() {
    display2.innerHTML = display2
}