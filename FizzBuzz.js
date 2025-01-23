
    var fizzBuzz = function(n) {
        let x=[]
        for(i=1;i<=n;i++){
        
        
        
        
        
        
        if(i%3===0 && i%5===0){
        
        x.push( "FizzBuzz")
        
        
        
        }else if(i%5==0){
        
        x.push("Buzz")
        
        }
        else if(i%3===0){
            x.push("Fizz")
        }else{
            x.push(i.toString())
        }}
        
        return x;
        
        
        }
        
        console.log(fizzBuzz(15));
        