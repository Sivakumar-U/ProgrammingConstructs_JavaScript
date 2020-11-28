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

// 3) Write a program that takes a input and determines if the number is a prime.
{
    let num=Number(prompt("Enter number to check number is prime or not :"));
    let flag=1;
    for(let i=2;i<=num/2;i++)
        if(num % i == 0){
            flag=0;
            break;
        }
    if(num == 1)
        console.log("1 is not a prime number.");
    if(flag ==0)
        console.log(num+" is not a prime number.");
    else
        console.log(num+" is a prime number.");
}

// 4) Extend the program to take a range of number as input and output the Prime Numbers in that range.
{
    console.log("Enter range to print prime numbers :");
    let num1=Number(prompt("Enter range of num1:"));
    let num2=Number(prompt("Enter range of num2:"));
    let flag=1;
    let num=0;
    console.log("Prime numbers are in given range :");
    for(num = num1+1; num < num2; num++){
        flag = 1;
        for(i=2; i<=num/2; i++)
            if(num % i == 0){
                flag=0;
                break;
            }
        if (flag == 1)
            console.log(num);
    }   
}