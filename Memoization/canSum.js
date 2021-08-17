// const canSum = (targetSum, numbers, memo = {}) => {
//     let isSum = false;
//     if ( targetSum in memo) return memo[targetSum];
//     if( targetSum === 0 ) return true;
//     if( targetSum < numbers.min) return false;
    
//     for(let num of numbers)
//     {
//         //console.log(num);
//         if (num <= targetSum) {
//             targetSum = targetSum - num;
//             let result = false;
//             if (targetSum in memo) {
//                 result = memo[targetSum];
//             }
//             else{
//                 result = canSum(targetSum, numbers, memo);
//                 memo[targetSum] = result;
//             }
//             if (result) {
//                 isSum = true;
//                 break;
//             }
//         }
//     }

//     // numbers.forEach(num => {
//     //     if (targetSum <= num) {
//     //         targetSum = targetSum - num;
//     //         result = canSum(targetSum, numbers);
//     //         if (result) {
//     //             isSum = true;
//     //            // break;
//     //         }
//     //     }
//     // });
//     return isSum;
// }

const canSum = (targetSum, numbers, memo = {}) => {
    if ( targetSum in memo ) return memo[targetSum];
    if ( targetSum === 0 ) return true;
    if ( targetSum < 0 ) return false;

    for ( let num of numbers ) {
        const reminder = targetSum - num;
        if ( canSum(reminder, numbers, memo) === true ) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}

console.log(canSum(17,[15,2,4,8]));
console.log(canSum(30000, [7,14]));