
function createCounter(num){
    let count=num;
    return function (){
return count ++;
    }
}
   const counter = createCounter(10);       

counter()

counter()

counter()

