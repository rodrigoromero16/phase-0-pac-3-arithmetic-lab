//require ( './root.js' );
let a, b,n;
a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;

}
function multiply(a,b){
    return (a*b);

}
function divide(a,b){
    return a/b;
}
function increment(n){
    n++;
    return n;
}
function decrement(n){
    n--;
    return n;
}
function makeInt(n){
    n = parseInt(a,b);
    return n;
}
function makeInt(string){
    return parseInt(string.toString(),10);
}
function preserveDecimal(string){
    const parsed = parseFloat(string);
    return parsed;
}