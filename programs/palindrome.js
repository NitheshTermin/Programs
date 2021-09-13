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


const palindromeNew = (str) => {

    const length = str.length;

    for (let i = 0; i < length/2 ; i++) {
        
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }        
    }
    return true;
}

console.log(palindromeNew('applesstelppa'));

//console.log(palindromeBruteForce('abab'));