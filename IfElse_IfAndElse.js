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