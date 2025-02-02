var maximumWealth = function(accounts) {
    let maxWealth = 0;
    for (let acc of accounts) {
        let sum = acc.reduce((a, b) => a + b, 0);
        maxWealth = Math.max(maxWealth, sum);
    }
    return maxWealth;
};