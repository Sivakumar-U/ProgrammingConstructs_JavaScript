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

// 3)Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
    let number=Number(prompt("Enter any number(1,10,100,..,100000):"));
    switch(number){
        case 1  :  console.log("Unit");
                    break; 
        case 10  :  console.log("Ten");
                    break; 
        case 100  :  console.log("Hundread");
                    break; 
        case 1000  :  console.log("Thousand");
                    break; 
        case 10000  :  console.log("Ten thousand");
                    break; 
        case 100000  :  console.log("Lakh");
                    break; 
        default :   console.log("Wrong input");
    }
}

// 4)Write a program that takes User Inputs and does Unit Conversion of different Length units
{
    let givenLength=Number(prompt("Enter length to convert :"));
    let convertInto=Number(prompt("Enter 1:Ft to Inch 2:Ft to Meter 3:Inch to Ft 4:Meter to Ft for conversion:"));
    const ftToInch=1;
    const ftToM=2;
    const inToFt=3;
    const mToFt=4;

    const ft_Inch=12;
    const ft_M=0.3048;
    const inch_ft=1/12;
    const m_ft=3.28084;

    switch(convertInto){
        case ftToInch   :   console.log(givenLength+" ft ="+givenLength*ft_Inch+" inch");
                            break;
        case ftToM   :   console.log(givenLength+" ft ="+givenLength*ft_M+" m");
                            break;
        case inToFt   :   console.log(givenLength+" in ="+givenLength*inch_ft+" ft");
                            break;
        case mToFt   :   console.log(givenLength+" m ="+givenLength*m_ft+" ft");
                            break;
        default :   console.log("Wrong input");
    }
}