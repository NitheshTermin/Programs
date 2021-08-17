const bestSum = (targetSum, numbers, memo={})=> {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let bestResult = null;
    for( let num of numbers) { 
        const reminder = targetSum - num;
        const reminderResult = bestSum(reminder, numbers, memo);
        if ( reminderResult !== null )
        {
            const newResult = [...reminderResult, num];
            if (bestResult === null) {
                bestResult = newResult;
            }
            else if (bestResult !== null && newResult.length < bestResult.length )
            {
                bestResult = newResult;
            }
        }
    }

    memo[targetSum] = bestResult;
    return bestResult;
}

console.log(bestSum(7,[5,3,4,7]));
console.log(bestSum(17,[1,2,4,8]));
console.log(bestSum(30000, [100, 500, 600, 700,14]));