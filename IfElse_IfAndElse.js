const prompt = require('prompt-sync')();
{
let number=Number(prompt("Enter the number(0-5) :"));
if(number == 0)
    console.log("Zero.");
else if(number == 1)
    console.log("One.");
else if(number == 2)
    console.log("Two.");
else if(number == 3)
    console.log("Three.");
else if(number == 4)
    console.log("Four.");
else if(number == 5)
    console.log("Five.");
else
    console.log("Wrong input.");
}

// 2) Read a Number and Display the week day (Sunday, Monday,...)
{
    let day=Number(prompt("Enter week day number :"));
    if(day == 1)
        console.log("Sunday.");
    else if(day == 2)
        console.log("Monday.");
    else if(day == 3)
        console.log("Tuesday.");
    else if(day == 4)
        console.log("Wednesday.");
    else if(day == 5)
        console.log("Thursday.");
    else if(day == 6)
        console.log("Friday.");
    else if(day == 7)
        console.log("Saturday.");
    else
        console.log("Wrong input.");
}

// 3)Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
    let number=Number(prompt("Enter the number (1,10,100,..,1000):"));
    if(number == 1)
        console.log("Unit.");
    else if(number == 10)
        console.log("Ten.");
    else if(number == 100)
        console.log("Hundread.");
    else if(number == 1000)
        console.log("Thousand.");
    else
        console.log("Wrong input.");
}

// 4)Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
// 1. a + b * c 3. c + a / b
// 2. a % b + c 4. a * b + c
{
    let a=Number(prompt("Enter value a :"));
    let b=Number(prompt("Enter value b :"));
    let c=Number(prompt("Enter value c :"));
    
    let operation1=a+b*c;
    let operation2=a%b+c;
    let operation3=c+a/b;
    let operation4=a*b+c;

    console.log(operation1);
    console.log(operation2);
    console.log(operation3);
    console.log(operation4);
    
    let max=(operation1 > operation2 && operation1 > operation3 && operation1 > operation4) ? operation1 : (( operation2 > operation3 && operation2 > operation4) ? operation2 : (operation3 > operation4 ? operation3 : operation4));
    let min=(operation1 < operation2 && operation1 < operation3 && operation1 < operation4) ? operation1 : (( operation2 < operation3 && operation2 < operation4) ? operation2 : (operation3 < operation4 ? operation3 : operation4));
    
    console.log("Maximum value :"+max);
    console.log("Minimum value :"+min);
}
    