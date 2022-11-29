const factorial = (n)=>{
    if(n===1){
        return 1
    } 
    return n * factorial(n-1); 
}
console.log(factorial(5));

0,1,1,2,3,5,8,13,21,34,55,89,144
const febonachi = (n)=>{
    if(n===1 || n===2){
        return 1;
    }
    return febonachi(n-1) + febonachi(n-2);
}
console.log(febonachi(9));
