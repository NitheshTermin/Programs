var twoSum = function(nums, target) {
    
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if((nums[i]+nums[j]) == target){
                return [i,j];
            }
        }
    }  
};

var twoSumHashMap = function(nums, target){
    let hashMap = new Map();

    nums.forEach(element => {
        hashMap.set(target - element, element);
    });

    for (let i = 0; i < nums.length; i++) {
       
        if(hashMap.has(nums[i])){
            return [nums[i], hashMap.get(nums[i])];
        }
        
    }

    return [];
}

console.log(twoSumHashMap([2,7,11,15,-1], 10));

