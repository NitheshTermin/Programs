/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    
    let hash = {};

    strs.forEach(str=>{
        let tempStr = str.split('').sort().join('');
        if(Object.keys(hash).indexOf(tempStr) == -1){
            hash[tempStr] = [str];
        } else {
            hash[tempStr].push(str);
        }
    })

    let result =[];
    Object.keys(hash).forEach(key=>{
        result.push(hash[key]);
    })

    return result;
};


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))