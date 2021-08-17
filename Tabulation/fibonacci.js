const fib = (n) => {
    const table = Array(n + 1);
    table[0] = 0;
    table[1] = 1;
    for (let index = 2; index <= n; index++) {
     table[index] = table[index-1] + table[index-2];
    }

    console.log(table);
    return table[n];
}

console.log(fib(6));
console.log(fib(50));