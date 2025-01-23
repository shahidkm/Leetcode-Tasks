var defangIPaddr = function(address) {
    
    return address.replace(/\./g, '[.]');

};
let x="1.1.1.1";
console.log(defangIPaddr(x));
