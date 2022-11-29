const array = [1,4,7,3,9,5,0,2,4,6];
let count = 0;
function linerSearch(num,array) {
    for(let i = 0; i < array.length; i++){
        count += 1;
        if(num === array[i]){
            return i
        }
    }
    return null;
}
console.log(linerSearch(2,array));
console.log(count);