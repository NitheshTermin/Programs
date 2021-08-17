const canConstruct = (target, wordBank, memo={}) => {
    if( target in memo) return memo[target];
    if(target === '') return true;

    for(let word of wordBank){
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            //console.log(suffix);
            const result = canConstruct(suffix,wordBank, memo);
            memo[target] = result;
            if(result) {
             return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff', ['a', 'aaaaaffff', 'aaaa']));