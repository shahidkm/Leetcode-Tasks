var capitalizeTitle = function(title) {
    let x = title.toLowerCase();    
    let y = x.split(" ");           
    let z = y.map(ele => {
       
        if (ele.length <= 2) {
            return ele.toLowerCase();
        } else {
           
            return ele.charAt(0).toUpperCase() + ele.slice(1);
        }
    });
    console.log(z.join(" "));      
}

let title = "capiTalIze tHe Of titLe";
capitalizeTitle(title);  
