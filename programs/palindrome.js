const palindromeBruteForce = (s) => {
    let len = s.length;
    if (s.length <= 1) {
        return true;
    }
    if (len%2 === 0) {
        let i = 0;
        let j = len-1;
        while (i<j) {
            if(s[i] !== s[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    } else {
        let mid = (len-1)/2;
        let i = 0, j = len-1;
        while (i<mid && j>mid) {
            if(s[i] !== s[j]){
                return false;
            }
            i++;
            j--;
        }

        return true;
    }    
}


console.log(palindromeBruteForce('abab'));