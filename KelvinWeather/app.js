//I used const becuase this variable will stay CONSTANT. 
const kelvin = 0;

//I used this format because I believe this is how I state that we are subtracting 273 from the variable Kelvin

const celsius = kelvin - 273;

//I used this formula because it is how you would convert celius to Fahrenheit. I am not sure it is going to work with the division but I will see.
const fahrenheit = celsius * (9/5) + 32;
const roundedFahrenheit = Math.floor(fahrenheit);