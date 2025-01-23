var findMaxAverage = function(nums, k) {
  



let x=[]

for(let char of nums){
    if(char>0 && char>=k){
        x.push(char)
    }
    if(char<0 && char<=-k){
        x.push(char)
    }
    if(char[k]>=k){
        x
    }
}
let sum=x.reduce((accu,item)=>accu+item,0)
return sum/k
};
let  nums = [3,3,4,3,0]
let k = 3
console.log(findMaxAverage(nums,k));




// var findMaxAverage = function(nums, k) {
// let v=[]
// for(i=0;i<k;i++){
// v.push(nums[i])
// }
// let x=v.reduce((accu,item)=>accu+item,0)

// return x/k
// }

//  let  nums = [3,3,4,3,0]
// let k = 3
// console.log(findMaxAverage(nums,k));