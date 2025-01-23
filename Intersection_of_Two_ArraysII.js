var intersect = function(nums1, nums2) {
    let x=nums1
    let y=[]
    for(let char of nums2){
        if(x.includes(char)){
y.push(char)
        }
    }
    return(y)
};

let  nums1 = [1,2,2,1]
let nums2 = [2,2]

console.log(intersect(nums1,nums2));
