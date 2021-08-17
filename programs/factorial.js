const prompt = require('prompt-sync')();

const num = prompt('enter the number for factorial');

const fact = (n) =>{
    if(n===1)
        return 1;
    else 
        return n*fact(n-1);
}

console.log(fact(Number(num)));
