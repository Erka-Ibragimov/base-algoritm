const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5,-99, 23, 6,-64, 2, 35, 6, 3,
];
let count = 0;

function sort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < array.length; j++) {
        count += 1;
        if(array[j] < array[indexMin]){
            indexMin = j;
        }
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array
}

console.log(sort(arr));
console.log(count);
console.log(arr.length);
