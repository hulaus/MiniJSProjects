// Made variable a const because my age will not be changing for another 2 or 3 months. This will be staying constant while I am making this project

const myAge = 30;

var earlyYears = 2;
//I put this variable as let because it will be changing soon

earlyYears = earlyYears * 10.5;

laterYears = myAge - 2;

// I wrote task 5 this way because it seems like this is how I would reassign the laterYears variable to account for mulitplying the variable by 4
laterYears = laterYears * 4;

console.log(laterYears);
console.log(earlyYears);

//I made myAgeInDogYears as a const because the formula will not be chaning it will always be ealryYears + laterYears

const myAgeInDogYears = earlyYears + laterYears;

const myName = "Joseph"
console.log(myName.toLowerCase());

// I wrote this line as a string Interpolation because it is cleaner to use than a string concatenation. I the variables myName, myAge and myAgeInDogYears

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years. `);