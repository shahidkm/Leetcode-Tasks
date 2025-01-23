var isAcronym = function(words, s) {
 let x=[]
for(let char of words){
    x.push(char[0])
}
let y=x.join("")


if(y===s){
    return true
}else{
    return false
}
};

let a=["alice","bob","charlie"];
b="abc"
console.log( isAcronym(a,b));
