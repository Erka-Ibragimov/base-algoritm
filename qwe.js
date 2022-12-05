// const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// let count = 0;

// function findElement(array, item) {
//   let start = 0;
//   let middle;
//   let end = array.length;
//   let found = false;
//   let position = -1;
//   while (found === false && start <= end) {
//     middle = Math.floor((start + end) / 2);
//     if (item == array[middle]) {
//       found = true;
//       position = middle;
//       return position;
//     }
//     if (item < array[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//   return position;
// }
// console.log(findElement(array, 11));

/////////////////////////////////////////////////
// const arr = [
//   0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, -99, 23, 6, -64, 2,
//   35, 6, 3,
// ];
// let count = 0;

// function selectionSort(arr) {
//     for(let i = 0; i < arr.length; i++){
//         let index = i
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[j]< arr[index]){
//                 index = j;
//             }
//         }
//         let tmp = arr[i]
//         arr[i] = arr[index]
//         arr[index] = tmp;
//     }
//     return arr;
// }
// console.log(selectionSort(arr));;


// const arr = [
//   0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, -99, 23, 6, -64, 2,
//   35, 6, 3,
// ];
// let count = 0;

// function bubbleaSort(arr) {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 let tmp = arr[j];
//                 arr[j] = arr[j+1]
//                 arr[j+1] = tmp
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleaSort(arr));


const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, -99, 23, 6, -64, 2,
  35, 6, 3,
];
let count = 0;

function quickSort(array) {
    let middle = Math.floor(array.length/2);
    let less = []
    let more = []
    for(let i = 0; i < array.length; i++){
        
    }
}
console.log(quickSort(arr));