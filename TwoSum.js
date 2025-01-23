function TwoSum(l1,l2 ){
let x1=l1.reverse("").join("")
let x2=l2.reverse("").join("")
let y1=parseInt(x1)
let y2=parseInt(x2)
let v=y1+y2
return v;

}
let  l1 = [2,4,3]
let l2 = [5,6,4]
TwoSum(l1,l2)