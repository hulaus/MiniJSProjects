//I used const becuase this variable will stay CONSTANT. 
const kelvin = 0;

//I used this format because I believe this is how I state that we are subtracting 273 from the variable Kelvin

const celsius = kelvin - 273;

//I used this formula because it is how you would convert celius to Fahrenheit. I am not sure it is going to work with the division but I will see.
const fahrenheit = celsius * (9/5) + 32;
const roundedFahrenheit = Math.floor(fahrenheit);

//I had to look up how Math.floor is properly syntaxed on MDN but once I saw the syntax I put Fahrenheit inside of Math.floor to get the rounded number 

//console.log('The temperature is ' + Math.floor(Fahrenheit) + ' degrees Fahrenheit.');

//Looked at the hint for this part of the project and showed me how to write the code to be cleaner. I previously used string concatenation but it is simpler and cleaner to use string Interpolation.
console.log(`The temperature is ${Math.floor(roundedFahrenheit)} degrees Fahrenheit.`);

const newton = celsius * (33/100);
const roundedNewton = Math.floor(newton);

console.log(`If you are looking for the temperature on the Newton scale the temperature is ${roundedNewton} today.`);