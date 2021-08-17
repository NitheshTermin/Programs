const longestSubStringBrutForce = (s1, s2) =>{
    const n = s1.length;
    const m = s2.length;
    let lst = '' ;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            
            if (s1[i] === s2[i]) {
                let tempLST = '';
                let count = 0;
                while(i+count < n && j+count < m && s1[i+count] === s2[j+count] ){
                    tempLST = tempLST + s1[i+count];
                    count++;
                }
                if(tempLST.length > lst.length){
                    lst = tempLST;
                }
            }
        }
        
    }

    return lst;
}

const longestSubStringDP = (s1, s2) => {
    const m = s1.length;
    const n = s2.length;
    let lst = '';
    let p, q, lstlength = 0;


    const table = Array(m + 1).fill().map(() => Array(n + 1)).map(x => x.fill(0));
    // OR
    // const table = new Array(m+1).fill(new Array(n+1)).map(x=>x.fill(0));


    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                table[i][j] = table[i - 1][j - 1] + 1;
                if (table[i][j] > lstlength) {
                    lstlength = table[i][j];
                    p = i;
                    q = j;
                }
            } else {
                table[i][j] = 0;
            }
        }
    }

    if (lstlength > 0) {
        while (p > 0 && q > 0) {
            if (table[p][q] != 0) {
                lst = s1[p - 1] + lst;
                p--;
                q--;
            } else {
                break;
            }
        }
    }


    
    console.log(table);

    console.log(p, q);

    return lst;
    
}

console.log(longestSubStringDP('ABCDEFGappleorangehijk', 'PQCDERSappleorangehhijk'));