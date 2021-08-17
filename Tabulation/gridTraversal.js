const gridTraversal = (m, n) =>{
    //Creating a 2d array in jaavascript is quite tricky.
    const table = Array(m+1).fill().map(()=>Array(n+1)).map(x=>x.fill(0));
    table[1][1] = 1;
    console.log(table);
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
         if (i+1 <= m) {
             table[i+1][j] += table[i][j];
         }   
         if (j+1 <= n) {
             table[i][j+1] += table[i][j];
         }
        }
    }

    console.log(table);
    return table[m][n];
}

console.log(gridTraversal(3,3));