let count = 0;
// const one = (array) => {
//   console.log("array: ", array);
// };

// const two = (array) => {
//   let newArray = [];
//   count++;
//   newArray = array;
//   console.log("operations: ", count);
//   console.log(newArray);
// };

// two(array);

// time O(n)
// const three = (array) => {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     count++;
//     newArray.push(array[i]);
//   }

//   console.log("newArray", newArray);

//   console.log("operations: ", count);
// };
// three(array);

// // time O(1) | space O(1)
// function threepoint1(arr) {
//     let newArr = arr;
//   return arr;
// }
// console.log(threepoint1);

// const four = (array) => {
//   let newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       count++;
//       newArray.push(array[i] + array[j]);
//     }
//   }
//   console.log(newArray, newArray.length);
//   console.log("operations: ", count);
// };
// four(array);

// time O(n) | space O(n)
// const five = (array) => {
//   //   array.forEach((x) => {
//   //     console.log(x);
//   //   });
// //   const newArray = array.map((x) => x * 2);
// const newValue=array[1]
//   console.log(newValue);
// };
// five(array);

// time O(2n)=>O(n) | space O(n)
const six = (array) => {
  const newArray = array.map((x) => x * x).filter((x) => x % 2 === 0);
  console.log(newArray);
};

// newArray=array[1]
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array = [1, 2, 3, 4, 5];
// const array = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// const array = [11, 12, 13, 14, 15, 16, 5, 17, 18, 19, 20];

// const earlyReturn = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     count++;
//     // return;
//     // if (true == true) return true; // time O(1)
//     // if (array[i] == 5) return true; // time O(n)
//     if (array[5] == 5) return true;

//     // do something fancy
//   }
// };
// console.log("operations: ", count);
// earlyReturn(array);

// includes/indexOf
// show algo examples

// const array = [1, 2, 3, 4, 5];
// console.log(array[3]); //time O(1) | space O(1)

// // new code

// console.log(array.includes(3)); //time O(n) | space O(1)

const newArray = array.filter((e) => array.includes(e)); //time O(n^2) | space O(n)
