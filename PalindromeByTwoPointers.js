let word="malaxeralam"



function isPalindrome(str){

for(let left=0 ,right=str.length-1;left<right;left++,right--){
if(str[left]!==str[right]){
    return false
}


return true
}}

console.log(isPalindrome(word))
