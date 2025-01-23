// Write a program to print the following Number Pyramid pattern.
//      1
//     123
//    12345
//   1234567
//  123456789




for (let i = 0; i < 5; i++) {

    for (let j = 4; j > i; j--) {
        
        document.write("&nbsp"); 
    }
    

    for (let k = 1; k <= 2 * i -1; k++) {
        document.write("*");
    }
    
    
    document.write("<br>");
}
