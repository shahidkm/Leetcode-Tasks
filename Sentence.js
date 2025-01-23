let x = "leetcode exercises sound delightful";

function check(str) {
    let words = str.split(" ");
    let firstword = [];
    let lastword = [];

    for (let word of words) {
        // Collect first and last letters of each word
        firstword.push(word[0]);
        lastword.push(word[word.length - 1]);
    }

    // Check if any last letter exists in the first letter array
    let hasCommonLetter = lastword.some(letter => firstword.includes(letter));
    console.log(hasCommonLetter); // true if there's a match, false otherwise
}

check(x);
