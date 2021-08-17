/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    
    if (nums.length<3) {
        return [];
    }
    nums = nums.sort((a,b)=>{return a-b});
    let threeSum = [];
    let usedIndex = {x:[],y:[],z:[]};

    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                if (((nums[i]+nums[j]+nums[k]) == 0) && usedIndex.x.indexOf(i) == -1 && 
                usedIndex.y.indexOf(j) == -1 && usedIndex.z.indexOf(k) == -1) {
                    threeSum.push([nums[i],nums[j],nums[k]]);                    
                    usedIndex.x.push(i);
                    usedIndex.y.push(j);
                    usedIndex.z.push(k);
                }
            }
            
        }
        
    }
    console.log(usedIndex);
    return threeSum;
};

console.log(threeSum([-1,0,1,2,-1,-4]));