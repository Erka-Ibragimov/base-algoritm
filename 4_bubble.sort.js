const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, -99, 23, 6, -64, 2,
  35, 6, 3,
];
let count = 0;
function sort(array) {
  for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        count += 1;
       if(array[j+1] < array[j]){
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp;
       }
    }
  }
  return array
}
console.log(sort(arr));
console.log(count);
