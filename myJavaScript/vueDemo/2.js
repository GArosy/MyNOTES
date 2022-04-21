const coins = [2,4,8];
const change = (amount, coins) => {
    let dp = Array(amount + 1).fill(0);
    dp[0] = 1;

    for(let i =0; i < coins.length; i++) {
        for(let j = coins[i]; j <= amount; j++) {
            if ((coins[0] > j - coins[i])||(coins[1] > j - coins[1])||(coins[2] > j - coins[2])) {
                dp[j] += dp[j - coins[i]];
            }
        }
    }
    // console.log(dp[94]);
    return dp[amount];
}

console.log(change(100,[2,4,8]));