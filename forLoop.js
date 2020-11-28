// 1)Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
const prompt = require('prompt-sync')();
{
    let number=Number(prompt("Enter number to get power of 2 :"));
    for(let i=1;i<=number;i++)
        console.log("2 ^ "+i+" ="+Math.pow(2,i));
}