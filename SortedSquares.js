/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let x=[]
   for(let no of nums){
    x.push( Math.sqrt(no))
   }
    
    let u=[];
    for(no of x){
        u.push( Math.round(no))
    }

let y=u.sort((a,b)=>{
    a-b
})

    return y;
    };
let x=[10,20]
    console.log(sortedSquares(x));
    