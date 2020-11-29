// 1) Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
const prompt = require('prompt-sync')();
{
    var array=new Array();
    for (let i=0;i<10;i++){
        let random=Math.floor(Math.random()*1000);
        if(random >=100 && random <=999)
            array[i]=random;
        else
            i-=1;
    }
    console.log("Generated random numbers into array :"+array);
    let largest=array[0];
    let secondLargest=0;
    for (let i=1;i<=array.length;i++)
        if(largest < array[i]){
            secondLargest=largest;
            largest=array[i];
        }
        else if(secondLargest <array[i] && array[i] != largest){
            secondLargest=array[i];
        }
    console.log(" Second largest number : " +secondLargest);

    let smallest=array[0];
    let secondSmallest=999;
    for (let i=1;i<=array.length;i++)
        if(smallest > array[i]){
            secondSmallest=smallest;
            smallest=array[i];
        }else if(secondSmallest > array[i] && array[i] != smallest){
            secondSmallest=array[i];
        }
    console.log(" Second smallest number : " +secondSmallest);
}

// 2) Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.
{
    var array=new Array();
    for (let i=0;i<10;i++){
        let random=Math.floor(Math.random()*1000);
        if(random >=100 && random <=999)
            array[i]=random;
        else
            i-=1;
    }
    console.log("Generated random numbers into array :"+array);
    array.sort();
    console.log("Sorted Array :"+array);
    console.log(" Second largest number : " +array[array.length-2]);
    console.log(" Second smallest number : " +array[1]);
}

// 3) Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.
{
    let number=Number(prompt("Enter number to compute its prime factors:"));
    let flag=1;
    var primeFactors=new Array();
    array_counter=0;
    for(let i=2;i<=number;i++){
        if(number% i == 0){
            flag=1;
            for(let j=2;j<=i/2;j++){
                if(i % j == 0){
                    flag=0;
                    break;
                }
            }
            if (flag==1){
                primeFactors[array_counter++]=i;
            }
        }
    }
    if(number == 1)
        console.log("1 has no prime factors.");
    else
        console.log("Prime factors of "+number+ " are :"+primeFactors);
}

// 4) Write a Program to show Sum of three Integer adds to ZERO
{
    let length=Number(prompt("Enter total numbers in array:"));
    console.log("Enter numbers to check if three numbers adds to zero :");
    var array=new Array();
    for (let i=0;i<length;i++){
        array[i]=Number(prompt("Enter a number "+(i+1)+" : "));
    }
    console.log("Array :"+array);
    let found=0;
    for(let i=0;i<array.length-2;i++)
        for(let j=i+1;j<array.length-1;j++)
            for(let k=j+1;k<array.length;k++)
                if( array[i]+array[j]+array[k] == 0){
                    console.log("Sum of three integer adds to zero are: "+array[i]+","+
                    array[j]+","+array[k]);
                    found=1;
                }
    if(found == 0)
        console.log("The given integer are not adds to zero.");
}

// 5) Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array
let start = prompt("Enter starting number : ");
let end = prompt("Enter ending number : ");
let repeatedDigits = [];

for (let number = start; number <= end; number++) {
    let quotient = parseInt(number / 10);
    let remainder = number % 10;
    if (quotient == remainder && number != 0) {
        repeatedDigits.push(number);
    }
}
console.log("Repeated digits are : " + repeatedDigits);