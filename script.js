'strict mode'
// const marksMass = 78;
// const marksHeight = 1.69;

// const bmiMarksOne = marksMass / marksHeight ** 2;
// const bmiMarksTwo =  marksMass / (marksHeight * marksHeight);


// const johnMass = 92;
// const johnHeight = 1.95;

// const bmiJohnOne = johnMass / johnHeight **2;
// const bmiJohnTwo = johnMass / (johnHeight * johnHeight)

// // const markHigherBMI = bmiMarksOne > bmiJohnOne

// console.log(bmiMarksOne, bmiJohnOne);

//   if (bmiMarksOne > bmiJohnOne) {
//     console.log("Mark's BMI is higher than John's!");
//     console.log(`As Mark's BMI is ${bmiMarksOne} and John's only ${bmiJohnOne}`);
//   } else {
//     console.log("nope that is the contrary");
//   };

// const averageDolphinsScore = (96 + 108 + 89) / 3;
// const averageKoalasScore = (88 + 91 + 110) / 3;

// console.log(averageDolphinsScore, averageKoalasScore);

// if (averageKoalasScore >= averageDolphinsScore) {
// console.log("the Koalas Wont!")  
// } else {
//   console.log("no papa al revez")
// };
const billValue = 275;

// const tip = 0.15 * billValue ? billValue >= 50 && billValue <= 300 : 0.2 * billValue;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(`the bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);



// function fruitProcessor(apples, orange) {
//   const juice = `Juice with ${apples} apples and ${orange} oranges`;
//   return juice
// }

// const appleJuice = fruitProcessor(6, 0);
// console.log(appleJuice);

// const calcAverage = (a, b, c) => (a + b + c ) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(scoreDolphins, scoreKoalas) {
//   if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins wins (${scoreDolphins } vs. ${scoreKoalas} `)
//   } else { 
//     console.log(`Koalas wins (${scoreKoalas} vs. ${scoreDolphins})`)
//   }
// }

// checkWinner();


function describeCountry(country, population, capitalCity) {
  return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
};

const france = describeCountry('France', 65, 'Paris');
const italy = describeCountry('Italy', 65, 'Rome');
const japan = describeCountry('Japan', 165, 'Tokyo');

console.log(france, italy, japan)



// function declaration
function calcAge(birthYear) {
  return 2000 - birthYear;
}
const age1 = calcAge(1988)

// function expression 
const calcAge2 = function(birthYear) {
  return 2000 -  birthYear;
}
const age2 = calcAge2(1987)

console.log(age1, age2)

// EX
const totalWorldPopulation = 7900

function percentageOfWorld1(population){
return (population / totalWorldPopulation) * 100;
}
const hexagon = percentageOfWorld1(63);
const china = percentageOfWorld1(1441);
console.log(hexagon, china);

const percentageOfWorld2 = function (population){
return (population / totalWorldPopulation) / 100;
}
const finland = percentageOfWorld2(13);
const russia = percentageOfWorld2(299);
console.log(finland, russia);


const percentageOfWorld3 = (population) => (population * totalWorldPopulation) / 100;
const ecuador = percentageOfWorld3(10);
console.log(`Ecuador has a population of ${ecuador}`);