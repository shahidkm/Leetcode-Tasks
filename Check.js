let word1 = ["ab", "c"]
let word2 = ["a", "bc"]



function Check(word1,word2){

let x=word1.join("");
let y=word2.join("");


return x===y;



}
console.log(Check(word1,word2));