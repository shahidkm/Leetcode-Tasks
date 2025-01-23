
var getSneakyNumbers = function(nums) {
    let x= new Set()
let v=[];
    for(elements of nums){
        if(x.has(elements)){
           v.push(elements)
        }else{
            x.add(elements)
        }
    }
    return x;
    }
    console.log(getSneakyNumbers([1,1,2,2,3]));
    
