var averageValue = function(nums) {
    let x=[]
    for(elements of nums){
if(elements%3===0){
    x.push(elements)
}
    }
    
let y=x.reduce((ac,el)=>ac+el,0)
return y/x.length
};
let a=[1,3,6,10,12,15]
console.log(averageValue(a));
