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
// const billValue = 275;

// // const tip = 0.15 * billValue ? billValue >= 50 && billValue <= 300 : 0.2 * billValue;
// const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// console.log(`the bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);



// // function fruitProcessor(apples, orange) {
// //   const juice = `Juice with ${apples} apples and ${orange} oranges`;
// //   return juice
// // }

// // const appleJuice = fruitProcessor(6, 0);
// // console.log(appleJuice);



// function describeCountry(country, population, capitalCity) {
//   return (`${country} has ${population} million people and its capital city is ${capitalCity}`);
// };

// const france = describeCountry('France', 65, 'Paris');
// const italy = describeCountry('Italy', 65, 'Rome');
// const japan = describeCountry('Japan', 165, 'Tokyo');

// console.log(france, italy, japan)



// //! function declaration, can be used before it's declared
// function calcAge(birthYear) {
//   return 2000 - birthYear;
// }
// const age1 = calcAge(1988)

// //! function expression, 
// const calcAge2 = function(birthYear) {
//   return 2000 -  birthYear;
// }
// const age2 = calcAge2(1987)

// console.log(age1, age2)

// // EX
// const totalWorldPopulation = 7900

// function percentageOfWorld1(population){
//   return (population / totalWorldPopulation) * 100;
// }
// const hexagon = percentageOfWorld1(63);
// const china = percentageOfWorld1(1441);
// console.log(hexagon, china);

// const percentageOfWorld2 = function (population){
//   return (population / totalWorldPopulation) / 100;
// }
// const finland = percentageOfWorld2(13);
// const russia = percentageOfWorld2(299);
// console.log(finland, russia);

// //! Arrow function, have no this keyword
// const percentageOfWorld3 = (population) => (population * totalWorldPopulation) / 100;
// const ecuador = percentageOfWorld3(10);
// console.log(`Ecuador has a population of ${ecuador}`);




// const describePopulation = function(country, population) { 
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people which is about ${percentage}% of the world`; 
//   console.log(description);
// };

// describePopulation('Estonia', 33);
// describePopulation('Sweden', 22);
// describePopulation('Lithuania', 21);

// // PART 2 CHALLENGE 1

// const calcAverage = (a, b, c) => (a + b + c ) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 *  avgKoalas) {
//     console.log(`Dolphins wins (${avgDolphins } vs. ${avgKoalas})`);
//   } else if (avgKoalas  >= 2 *  avgDolphins) {
//     console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphins})`)
//   } else {
//     console.log ('nobody wins');
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(333, 99);

// // PLAY W ARRAY
// const populations =  [33, 22, 42, 11];
// console.log(populations.length === 4 ? true : false);

// const percentages = [
//   percentageOfWorld1(populations[0]), 
//   percentageOfWorld1(populations[1]), 
//   percentageOfWorld1(populations[2]), 
//   percentageOfWorld1(populations[3])
// ];
// console.log(percentages);

// // ARRAY OPERATION

// const neighbours = ['italy', 'belgium', 'spain', 'switzerland', 'luxembourg'];
// neighbours.push('utopia');
// neighbours.pop();
// if (!neighbours.includes('germany')) {
//   console.log('Probably not a central European Country :D');
// };
// // console.log(neighbours.indexOf('spain'));
// // neighbours[2] = 'tapaslandia';
// neighbours[neighbours.indexOf('spain')] = 'tapaslandia'
// console.log(neighbours);

// CODING CHALLENGE 2

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
