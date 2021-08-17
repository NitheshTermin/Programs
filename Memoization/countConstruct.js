const countConstruct = (target, wordBank, memo = {})=> {
      if(target in memo) return memo[target];

      if(target === '') return 1;

      let count = 0;
      for(let word of wordBank){
          if (target.indexOf(word)===0) {
              const suffix = target.slice(word.length);
              const countSuffix = countConstruct(suffix, wordBank, memo);
              count += countSuffix;
          }
      }

      memo[target] = count;
      return count;
}

console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('aaaaaaaaaaffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff', ['a', 'aaaaaffff', 'aaaa']));