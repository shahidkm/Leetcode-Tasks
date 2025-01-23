var deleteDuplicates = function(head) {
    let arr=Array.from(head)
   let y=arr.map(ele=>ele)
    let x=new Set(y);
    return x;
};
let a=[1,1,2];
console.log(deleteDuplicates(a));
