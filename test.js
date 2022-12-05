// let obj1 = {
//   foo: "foo",
//   bar: "bar",
// };
// let obj2 = {
//   bar: "foo",
//   some: "some",
// };

// function sameKey(obj1, obj2) {
//   for (let key in obj2) {
//     if (obj1.hasOwnProperty(key)) {
//       obj1[key] = obj2[key];
//     }
//   }
//   return obj1;
// }
// const result = sameKey(obj1, obj2);
// console.log(result);

// ////////////////////////////////////////////////////
// const arr = [6.1, 4.2, 6.3];
// const func = Math.floor;

// const group = (arr, func) => {
//   let result = {};
//   arr.forEach((item) => {
//     let mathFloor = func(item);
//     if (!result.hasOwnProperty(mathFloor)) {
//       result[mathFloor] = [item];
//     } else {
//       result[mathFloor].push(item);
//     }
//   });
//   return result;
// };
// console.log(group(arr, func));

// function moveZeros(arr) {
//   let zero = []
//   let index = 0;
//   arr.find((num)=>{
//     if(num === 0){
//       index = arr.indexOf(num)
//       zero.push(num)
//       arr.splice(index,1);
//     }
//   })
//   return arr.concat(zero)
// }
// console.log(moveZeros([1,{},0,[],false,2,4,0,3,4,null,4,4,0,5]));

// Math.floor = function(number) {
//   const arr = String(number).split('.')
//   if(arr.length == 1){
//     return number
//   }
//   return parseInt(arr[0])
// };

// Math.ceil = function(number) {
//   const arr = String(number).split('.')
//   if(arr.length == 1){
//     return number
//   }
//   return parseInt(arr[0]) + 1
// };

// Math.round = function(number) {
//   const arr = String(number).split('.')
//   if(arr.length == 1){
//     return number
//   }
//   if(arr[1][0] >= 5){
//     return parseInt(arr[0]) + 1
//   }
//   return parseInt(arr[0])
// };

// console.log(Math.ceil(0));

var isPP = function (n) {
  const arrayDivisibleDigits = [];
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i == 0) {
      arrayDivisibleDigits.push(i);
    }
  }
  let result = [];
  arrayDivisibleDigits.forEach((element) => {
    let item = 1;
    let count = 0;
    while (item < n) {
      count += 1;
      item *= element;
    }
    if (item == n) {
      if (arrayDivisibleDigits.length == 1) {
        result.push(element, count);
      } else {
        result.push(`(${element},${count})`);
      }
    }
  });
  if (result.length == 0) {
    return null;
  }
  return result;
};
console.log(isPP(38025));