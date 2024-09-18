/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// //SLICE
// console.log(arr.slice(2));
// console.log(arr);
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// //SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// //REVERSE
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN

// console.log(letters.join(" - "));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //getting the last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log("jonas".at(0));
// console.log("jonas".at(-1));

//FOREACH LOOP

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Step${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Step${i + 1}: You withdraw ${Math.abs(movement)}`);
//   }
// }
// console.log("----FOREACH----");

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Step${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Step${i + 1}: You withdraw ${Math.abs(mov)}`);
//   }
// });

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set

// const currenciesUnique = new Set(["USD", "GBP", "PHP", "USD", "EUR", "EUR"]);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${_}: ${value}`);
// });

//Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored 
the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy 
("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const juliaCorrected = [...dogsJulia];
//   juliaCorrected.splice(0, 1);
//   juliaCorrected.splice(-2);
//   const dogs = [...juliaCorrected, ...dogsKate];
//   dogs.forEach(function (elem, i) {
//     if (elem >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${elem} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log("----Data----");
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// map Method

// const euroTOUsd = 1.1;

//

// // const conversion = movements.map(function (move) {
// //   // return (move * euroTOUsd).toFixed(2);
// //   return 23;
// // });

// console.log(movements);

// const movementsUsd = [];

// for (const mov of movements) {
//   movementsUsd.push(mov * euroTOUsd);
// }

// console.log(movementsUsd);

// const conversion = movements.map((move) => (move * euroTOUsd).toFixed(2));

// console.log(conversion);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Step${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`
// );

// console.log(movementsDescription);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositFor = [];
// for (const mov of movements) {
//   if (mov > 0) depositFor.push(mov);
// }
// console.log(depositFor);

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(withdrawals);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //accumulator -> SNOWBALL
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// //maximum value
// const max = movements.reduce((acc, curr) => {
//   if (acc > curr) {
//     return acc;
//   } else {
//     return curr;
//   }
// }, movements[0]);

// console.log(max);

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog 
ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, 
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are 
at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other 
challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

*/

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map((dog) => (dog <= 2 ? dog * 2 : 16 + dog * 4));
//   const adults = humanAge.filter((old) => old >= 18);
//   const average = adults.reduce((acc, curr) => acc + curr / adults.length, 0);
//   return average.toFixed(2);
// };

// const ages = [5, 2, 4, 1, 15, 8, 3];
// console.log(calcAverageHumanAge(ages));

// const ages2 = [16, 6, 10, 5, 6, 1, 4];
// console.log(calcAverageHumanAge(ages2));

// const euroUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * euroUsd)
//   .reduce((acc, cur) => acc + cur, 0)
//   .toFixed(2);
// console.log(deposits);

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((dog) => (dog <= 2 ? dog * 2 : 16 + dog * 4))
//     .filter((old) => old >= 18)
//     .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find((mov) => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);
// console.log(accounts);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);
// let acc = null;

// for (const account of accounts) {
//   if (account.owner === "Jessica Davis") {
//     acc = account;
//     console.log(acc);
//   }
// }

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Some
// console.log(movements);
// console.log(movements.includes(-130));
// const anyDeposits = movements.some((mov) => mov > 1500);
// console.log(anyDeposits);

//Every
// const any = movements.every((mov) => mov > 0);
// console.log(any);

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8, 9];
// console.log(arrDeep.flat(2));

// const accountMov = accounts.map((acc) => acc.movements);
// console.log(accountMov);
// const allMovements = accountMov.flat();
// console.log(allMovements);
// const overAllBalance = allMovements.reduce((acc, curr) => acc + curr, 0);
// console.log(overAllBalance);

// const overAllBalance = accounts
//   .map((acc) => acc.movements)
//   .flat()
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(overAllBalance);

// const owners = ["Jonas", "Zach", "Adam", "Martha"];
// console.log(owners.sort());
// console.log(owners);
// console.log(movements);

// return < 0, A, B(Keep Order)
// return > 0, B, A(Switch Order)

//Ascening
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// movements.sort((a, b) => a - b);
// console.log(movements);

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// movements.sort((a, b) => b - a);
// console.log(movements);
// const owners = ["Jonas", "Zach", "Adam", "Martha"];
// owners.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(owners);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x);

// // const z = x.fill(1, 3, 5);
// // console.log(z);

// arr.fill(23, 4, 6);
// console.log(arr);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const a = Array.from({ length: 100 }, (_, i) =>
//   Math.floor(Math.random(i + 1) * 100)
// );
// console.log(a);

// labelBalance.addEventListener("click", function () {
//   const movementUI = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("₱", ""))
//   );
//   console.log(movementUI);
//   const movemenUI2 = [...document.querySelectorAll(".movements__value")];
//   const numbers = movemenUI2.map((mov) =>
//     Number(mov.textContent.replace("₱", ""))
//   );
//   console.log(numbers);
// });

//1.
// const bankDeposit = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 0)
//   .reduce((mov, curr) => mov + curr, 0);

// console.log(bankDeposit);

// //2.

// // const numDeposit1000 = accounts
// //   .flatMap((acc) => acc.movements)
// //   .filter((mov) => mov >= 1000).length;

// const numDeposit1000 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

// console.log(numDeposit1000);

// //3

// const { deposit, withdrawal } = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, curr) => {
//       // curr > 0 ? (sums.deposit += curr) : (sums.withdrawal += curr);
//       sums[curr > 0 ? "deposit" : "withdrawal"] += curr;
//       return sums;
//     },
//     { deposit: 0, withdrawal: 0 }
//   );

// console.log(deposit, withdrawal);

// //4
// const convertTitle = function (title) {
//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
//   const exception = ["a", "an", "the", "and", "but", "or", "on", "in", "with"];

//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) => (exception.includes(word) ? word : capitalize(word)))
//     .join(" ");
//   return capitalize(titleCase);
// };

// console.log(convertTitle("this is a nice title"));
// console.log(convertTitle("this is a LONG title but not too long"));
// console.log(convertTitle("and here is another title with an EXAMPLE"));

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating 
too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, 
and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 
10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended 
food portion and add it to the object as a new property. Do NOT create a new array, simply 
loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food,
and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, 
and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') 
and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: 
"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of 
food that is recommended (just true or false)
6. Log to the console whether there is any dog eating 
an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount 
of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary 
lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 1.10). Basically, 
the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// //2
// const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(sarahDog);
// console.log(
//   `Sarah's dog is eating too ${
//     sarahDog.curFood > sarahDog.recFood ? "much" : "little"
//   }`
// );

// //3

// const allEatTooMuch = dogs
//   .filter((dog) => dog.curFood > dog.recFood)
//   .flatMap((dog) => dog.owners);
// console.log(allEatTooMuch);

// const allEatLitMuch = dogs
//   .filter((dog) => dog.curFood < dog.recFood)
//   .flatMap((dog) => dog.owners);
// console.log(allEatLitMuch);

// //4
// //Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// console.log(
//   `${allEatTooMuch.join(" and ")} dogs eat too much and ${allEatLitMuch.join(
//     " and "
//   )} dogs eat too little.`
// );

// //5
// const equalFood = dogs.some((dog) => dog.curFood === dog.recFood);
// console.log(equalFood);

// //6
// // current > (recommended * 0.90) && current < (recommended * 1.10)
// const eatingOkay = dogs.some(
//   (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
// );
// console.log(eatingOkay);

// //7
// const eatingOkayNames = dogs.filter(
//   (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
// );
// console.log(eatingOkayNames);

// //8

// const sorteds = dogs.slice().sort((a, b) => a.recFood - b.recFood);
// console.log(sorteds);
