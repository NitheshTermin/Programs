const howSum = (targetSum, numbers, memo = {}) => {
    if ( targetSum in memo) return memo[targetSum];

    if ( targetSum === 0 ) return [];

    if ( targetSum < 0 ) return null;

    for ( let num of numbers ) {
        const reminder = targetSum - num;
        const reminderResult = howSum(reminder, numbers, memo);
        if (reminderResult !== null) {
            memo[targetSum] = [...reminderResult, num];
            return memo[targetSum];
        }
        
    }

    memo[targetSum] = null;
    return memo[targetSum];
}

console.log(howSum(17,[15,2,4,8]));
console.log(howSum(30000, [100,14]));