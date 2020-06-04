"use strict";
let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("enter your number");
  numbers.push(input);
}

if (numbers.length !== 0) {
  for (let number of numbers) {
    total += Number(number);
  }
}

console.log(`Общая сумма чисел равна ${total}`);
