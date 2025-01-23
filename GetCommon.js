/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var x=10;
var getCommon = function(nums1, nums2) {
    let b = []; 
   
    for (let i = 0; i < nums1.length; i++) {
        
        if (nums2.includes(nums1[i])) {
            b.push(nums1[i]); 
        }
    }
var x=20;
   
    return Math.min(...b);
};

// let nums1 = [1, 2, 3];
// let nums2 = [2,3, 4];
// console.log(getCommon(nums1, nums2));
console.log(x);
