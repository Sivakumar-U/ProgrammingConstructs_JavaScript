// 1) Help user find degF or degC based on their Conversion Selection. Use Case Statement and ensure that the inputs are within the Freezing Point
    //(0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
    // a. degF = (degC * 9/5) + 32
    // b. degC = (degF – 32) * 5/9
const prompt = require('prompt-sync')();
{
    const cToF=1;
    const fToC=2;

    let temperature=Number(prompt("Enter temperature: "));
    let choice=Number(prompt("Convert temperature into 1.Fahreheit 2.Celsius: "));

    function getDegreeF(temperature){
        console.log(temperature+" C = "+(temperature*9/5+32).toFixed(3)+" F");
    }
    function getDegreeC(temperature){
        console.log(temperature+" F = "+((temperature-32)*5/9).toFixed(3)+" C");
    }

    switch(choice){
        case cToF   :   if(temperature >= 0 && temperature <=100)
                            getDegreeF(temperature);
                        else
                            console.log("Temperatoure should be within 0-100 C.");
                        break;
        case fToC   :   if(temperature >= 32 && temperature <=212)
                            getDegreeC(temperature);
                        else
                            console.log("Temperatoure should be within 32-212 F.");
                        break;
        default :   console.log("Wrong input.");
    }
}