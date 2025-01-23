// let x={
//     name:'shahid' ,
//     address:{
//         city:"ckd"
//     }
// }

// let y=JSON.parse(x)
// console.log(y.name);



function Memosisation(arg){
    let memo={}
    if(arg in memo){
        return memo[arg]
    }
  
    memo[arg]=arg*arg;
    return memo[arg]
}

console.log(Memosisation(10));

