
var mergeTwoLists = function(list1, list2) {

 let z=list1.concat(list2);

    return z.sort((a,b)=>a-b)

};
let a=[1,4,3,5,2]
let b=[1,2,4,8,9,7,78,6]
console.log(mergeTwoLists(a,b));
