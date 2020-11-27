const prompt = require('prompt-sync')();
{
    let day=Number(prompt("Enter week day number :"));
    switch(day){
        case 1  :   console.log("Sunday");
                    break;
        case 2  :   console.log("Monday");
                    break;
        case 3  :   console.log("Tuesday");
                    break;
        case 4  :   console.log("Wednesday");
                    break;
        case 5  :   console.log("Thursday");
                    break;
        case 6  :   console.log("Friday");
                    break;
        case 7  :   console.log("Saturday");
                    break;
        default :   console.log("Wrong input.");
    }
}

// 2)Read a single digit number and write the number in word using Case
let number=Number(prompt("Enter the number(0-9) :"));
    switch(number){
        case 0  :   console.log("Zero.");
                    break;
        case 1  :   console.log("One.");
                    break;
        case 2  :   console.log("Two.");
                    break;
        case 3  :   console.log("Three.");
                    break;
        case 4  :   console.log("Four.");
                    break;
        case 5  :   console.log("Five.");
                    break;
        case 6  :   console.log("Six.");
                    break;
        case 7  :   console.log("Seven.");
                    break;
        case 8  :   console.log("Eight.");
                    break;
        case 9  :   console.log("Nine.");
                    break;
        default :   console.log("Wrong input.");
    }

