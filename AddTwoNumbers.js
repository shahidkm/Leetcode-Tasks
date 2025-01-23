var addTwoNumbers = function(l1, l2) {
    // Join the arrays as strings, parse them into numbers, and sum them
    var num1 = parseInt(l1.reverse().join(''));
    var num2 = parseInt(l2.reverse().join(''));
    var total = num1 + num2;

    // Convert the result to an array of digits
    var result = total.toString().split('').reverse().map(Number).join("");

    return result;
};

var l1 = [2, 4, 3];  // Represents 342
var l2 = [5, 6, 4];  // Represents 465

console.log(addTwoNumbers(l1, l2));  // Output: [7, 0, 8] (807)
