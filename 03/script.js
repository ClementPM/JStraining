// Remember, we're gonna use strict mode in all scripts now!
"use strict";

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log(string);
};

printForecast(data1);
printForecast(data2);
