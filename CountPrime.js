var countPrimes = function(n) {
   
    

// if(n<=2){
// //     return false;
// }
for(let i=0;i<=n;i++){
    if(i===2){
        return i;
    }
    if(i%2==1){
        return i;
    }
    return i;
}

};
console.log(countPrimes(10));
