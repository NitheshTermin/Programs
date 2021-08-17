/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// [1,2,5,6] [3,5,7]
 var findMedianSortedArrays = function(nums1, nums2) {
    
    let i=nums1.length,j=nums2.length;
    let sortedArray =[]
    while (i > 0 && j > 0) {
        if (nums1[nums1.length - i]<nums2[nums2.length -j]) {
            sortedArray.push(nums1[nums1.length-i]);
            i = i-1;
            console.log('i ' + i);
        } else {
            sortedArray.push(nums2[nums2.length-j]);
            j = j-1;
            console.log('j ' + j);
        }
    }
    while (i>0) {
        sortedArray.push(nums1[nums1.length-i]);
        i -=1;
    }
    while (j>0) {
        sortedArray.push(nums2[nums2.length-j]);
        j -=1;
    }

    return sortedArray;
};

console.log(findMedianSortedArrays([1,2,5,6] ,[3,5,7]));