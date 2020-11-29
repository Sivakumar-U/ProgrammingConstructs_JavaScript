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

// 2) Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..
{
    let minNumber=1
    let maxNumber=100
    let midNumber=0
    while ( minNumber <= maxNumber ){
        midNumber=parseInt( (minNumber+maxNumber)/2 );
        console.log("Your number is lesser(l)/greater(g)/equals(e) : "+midNumber);
        input=prompt("Enter your option :");
        if(input == 'l')
            maxNumber=midNumber;
        else if (input == 'g')
            minNumber=midNumber;
        else if (input == 'e'){
            console.log("Your magic number is :"+midNumber);
            break;
        }
        else
            console.log("Wrong input")
    } 
}

// 3) Extend the Flip Coin problem till either Heads or Tails wins 11 times.
{
    let noOfTails=0
    let noOfHeads=0
    while(noOfHeads < 11 && noOfTails < 11){
        let toss=Math.floor(Math.random()*10)%2;
        if(toss == 0)
            noOfHeads++;
        else
            noOfTails++;
    }
    console.log("No of head wins are : " +noOfHeads+" No of tail wins are : " +noOfTails);
}

// 4) Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the goal of Rs 200. Keeps track of number of times won and number of bets made.
{
    let money=100;
    const goal=200;
    const bet_money=1;
    let bets=0;
    let wins=0;
    while(money == 0 || money < goal){
        bets++;
        if(Math.floor(Math.random()*10)%2 ==1){
            money+=bet_money;
            wins++;
        }
        else
            money-=bet_money;
    }
    console.log("Out of "+bets+" gambler bets, number of gambler wins are :"+wins);
}