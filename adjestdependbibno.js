function largestNumber(num){

let str=num.join("");
let spt=str.split("");
let sorted=spt.sort((a,b)=>b-a).join("").toString();
console.log(sorted);







}
largestNumber([10,2,3423456])