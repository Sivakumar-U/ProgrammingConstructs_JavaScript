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