var longestPalindrome = function(s) {
    
    if(s.length == 1){
        return s
    }
    if (s.length == 2) {
        if (s[0] == s[1]) {
            return s;
        }
        return s[0];
    }
    
    const strArr = s.split('');
    
    let longestPali = strArr[0];

   for (let i = 1; i < s.length; i++) {
       
        let m = i-1;
        let n = i+1;
        //If our palindrome is odd
        while ( m >=0 && n<=s.length){
            if (s[m]==s[n]) {
                const str = s.slice(m,n+1);
                if (str.length > longestPali.length) {
                    longestPali = str;
                }else {
                    break;
                }
            }
            m = m-1;
            n = n+1;
        }
       //If palindrome is even
       let p = i-1
       let q = i;
       while (p>=0 && q<=s.length) {
           if (s[p] == s[q]) {
               const str = s.slice(p,q+1);
               if(str.length > longestPali.length){
                   longestPali = str;
               }else {
                break;
            }
           }
           p = p-1;
           q = q+1;
       }
   }

   return longestPali;
    
};


console.log(longestPalindrome('ba'));