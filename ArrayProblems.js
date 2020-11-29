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