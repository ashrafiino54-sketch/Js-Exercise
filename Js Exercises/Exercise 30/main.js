
//  callback  Ex30


function operate(a,b ,callback) {
    return callback (a,b) ;
    
}
function add(a,b){
    return (a+b)
}

function sub (a,b){
    return (a-b)
}

function multiple (a,b){
    return (a*b);
}

function divide(a,b) {
    return(a/b)   
}

console.log("add", operate(10, 10 ,add));
console.log("sub", operate(100, 10 ,sub));
console.log("multiple", operate(10, 2 ,multiple));
console.log("divide", operate(10, 2 ,divide));

