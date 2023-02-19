// Arrays -> 17. Best Time to Buy and Sell Stock
// Link -> https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let n = prices.length;
  let profit = 0,
    min = prices[0];
  for (let i = 1; i < n; i++) {
    let diff = prices[i] - min;
    profit = Math.max(diff, profit);
    min = Math.min(prices[i], min);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));