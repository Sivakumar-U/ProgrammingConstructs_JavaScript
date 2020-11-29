// 1) Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..
const prompt = require('prompt-sync')();
{
    let number=Number(prompt("Enter number to get power of 2 :"));
    let i=1;
    let power_value=1;
    while(i<= number && power_value < 256){
        power_value=Math.pow(2,i)
        console.log("2 ^ "+i+" ="+power_value);
        i++;
    }
}