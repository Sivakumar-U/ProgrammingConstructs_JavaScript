// 1)Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
const prompt = require('prompt-sync')();
{
    let number=Number(prompt("Enter number to get power of 2 :"));
    for(let i=1;i<=number;i++)
        console.log("2 ^ "+i+" ="+Math.pow(2,i));
}

// 2)Write a program that takes a command-line argument n and prints the nth harmonic number.
{
    let number=Number(prompt("Enter number to print harmonic number :"));
    let harmonic=0
    for(let i=1;i<=number;i++){
        harmonic=harmonic+(1/i);
        console.log(i+" th Harmonic number :"+harmonic);
    }
}