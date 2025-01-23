var isPalindrome = function(x) {
  
    
    let c = x.toString();
    let sp = c.split("").reverse().join("");
    
    return c === sp;
};
