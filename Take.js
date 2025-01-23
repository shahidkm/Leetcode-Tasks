function take(s,k){

    let x=[];
    let y=[];

    for(i=0;i<=s.length;i++){

if(i===k){
x.push(s[i])
}



    }

    for(i=0;i<=s.length;i++){
        if(i!==k){
            y.push(s[i])
        }
    }
let z=x.concat(y).join("").toString()
return z;

}
let s = "dart";
let k = 4
console.log(take(s,k));
localStorage.setItem("name","shahid");
localStorage.getItem("name");
localStorage.setItem("name","minhaj")