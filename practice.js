var maxProfit = function(prices) {
    let profits = [];
    let low = prices[0];
    for(let i = 1; i < prices.length; i++){
        if  (prices[i] <= prices[i - 1] && i > 1 && prices[i - 1] > low){
            profits.push(prices[i - i] - low);
            low = prices[i];
        } else if (i === prices.length - 1 && prices[i] > prices[i - 1]){
            profits.push(prices[i] - low);
        }
    }
    console.log('the profites array is', profits);
    if (profits.length === 0 || Math.max(...profits) === 0){
        return 0;
    }else if (profits.length === 1){
        return profits[0];
    } else {
        profits = profits.sort();
        return profits[profits.length - 1] + profits[profits.length - 2];
    }
};

console.log('this should be 6', maxProfit([3,3,5,0,0,3,1,4]));
console.log('this should be 4', maxProfit([1,2,3,4,5]));
console.log('this should be 0', maxProfit([7,6,4,3,1]));
