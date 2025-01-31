/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    var n=nums.length;


    for(let i=0;i<n-1;i++){

        for(j=0;j<n-i;j++){

            if(nums[j]>nums[j+1]){
                [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
            }

        }
    }

    return nums;
};