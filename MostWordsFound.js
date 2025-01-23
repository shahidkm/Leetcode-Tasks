var mostWordsFound = function(sentences) {
 let large=0;  
for(x of sentences){
let word=x.split(" ").length;

if(word>large){
large= word;
}

}

return large;









};
let x=["alice and bob love leetcode","i think so too","this is great thanks very much"];
console.log(mostWordsFound(x))