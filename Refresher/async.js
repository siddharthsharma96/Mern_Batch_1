// Timers
const timerFunction = () => {
  //   let a = setInterval(() => {
  //     console.log("Interval  is running");
  //   }, 2000);

  setTimeout(() => {
    console.log("Timer is running");
    // clearInterval(a);
  }, 0);
};

timerFunction();
// Promises
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    reject("Lalit loose the bet");
  } else {
    resolve("lalit wins the bet");
  }
});

// Chainning Procces
// .then & .catch
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("error is", error);
  });
//   .finally(() => {
//     console.log("Promise is running");
//   });

// Async and await
const functionCall = async () => {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("first promise resolve");
//   }, 1000);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("second promise resolve");
//   }, 2000);
// });

// promise1
//   .then((result1) => {
//     console.log(result1);
//     return promise2; // return another promise
//   })
//   .then((result2) => {
//     console.log(result2);
//   })
//   .catch((err) => {
//     console.log("errr", err);
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// setTimeout(() => {
//   console.log("Timer1 is running");
//   // clearInterval(a);
// }, 0);

functionCall();

// // Array

// timerFunction();

let fruits = ["apple", "banana", "pineapple"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let scores = [1, 2, 3, 4, 5, 6, 7];
// Callback Function is a function  without any name we
// will pass it into another function as argument
// map((currentvalue,index,array))

const double = scores.map((value) => value * 2);
console.log(double);

// filter will return truthy values only
// filter((currentValue,index,array))

const evenNumbers = fruits.filter((value) => value !== "apple");
console.log(evenNumbers);

// Reduce will not return any array it will only a single value
// reduce((accumulator,currentValue,index,array)=>{},initialvalue)
const sum = scores.reduce((accumulator, value) => {
  return accumulator * value;
}, 1);

console.log(sum);
