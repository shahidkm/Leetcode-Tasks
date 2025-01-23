var removeDuplicates = function(nums) {
    let x=new Set(nums)
    let y=Array.from(x)
    let z=nums.length-x.size
   for(i=1;i<=z;i++){
    y.push("_")
   }
    return y
};
let num=[1,2,1]

console.log(removeDuplicates(num));
