const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16];
let count = 0;
function binarySearch(num, array) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while(found === false && start <= end){
        count += 1;
        middle = Math.floor((start+end)/2);
        if(array[middle] === num){
            found = true;
            position = middle;
            return position;
        }
        if(num<array[middle]){
            end = middle - 1;
        } else{
            start = middle + 1
        }
    }
    return position;
}

function recursiveBinarySearch(array,item, start, end) {
    let middle = Math.floor((start + end)/2);
    count += 1;
    if(item === array[middle]){
        return middle;
    }
    if(item < array[middle]){
        return recursiveBinarySearch(array,item, start, middle-1);
    } else{
        return recursiveBinarySearch(array,item,middle+1,end)
    }
}
// console.log(binarySearch(9, array));;
console.log(recursiveBinarySearch(array,6,0,array.length));
console.log(count);
