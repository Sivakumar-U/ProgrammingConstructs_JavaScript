// 1) Write a program in the following steps
// a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary
// d. Repeat till any one of the number has reached 10 times
// e. Find the number that reached maximum times and the one that was for minimum times
var prompt = require('prompt-sync')();
let rollDice = true;
let dice = new Map();
dice.set(1, 0);
dice.set(2, 0);
dice.set(3, 0);
dice.set(4, 0);
dice.set(5, 0);
dice.set(6, 0);

while (rollDice) {
    let keyNo = Math.floor((Math.random() * 6) + 1);
    let value = dice.get(keyNo);
    value++;
    dice.set(keyNo, value);
    if (value == 10) {
        rollDice = false;
    }
}
let least = 10, minKey = 0, maxKey;
for (let [key, value] of dice) {
    if (least > value) {
        minKey = key;
        least = value;
    }
    if (value == 10) {
        maxKey = key;
    }
    console.log(key + " , " + value);
}
console.log("Minimum : " + minKey);
console.log("Maximum : " + maxKey);

// 2) Write a Program to generate a birth month of 50 individuals between the year 92 & 93. Find all the individuals having birthdays in the same month. Store it to finally print.
{
    let birthMonth = new Map();
    birthMonth.set(1, 0);
    birthMonth.set(2, 0);
    birthMonth.set(3, 0);
    birthMonth.set(4, 0);
    birthMonth.set(5, 0);
    birthMonth.set(6, 0);
    birthMonth.set(7, 0);
    birthMonth.set(8, 0);
    birthMonth.set(9, 0);
    birthMonth.set(10, 0);
    birthMonth.set(11, 0);
    birthMonth.set(12, 0);

    for (let i = 92; i <= 93; i++) {
        for (let j = 1; j <= 50; j++) {
            let person = Math.floor((Math.random() * 12) + 1);
            let value = birthMonth.get(person);
            value++;
            birthMonth.set(person, value);
        }
    }
    for (let [key, value] of birthMonth) {
        console.log(key + " , " + value);
    }
}