function arrangeCoins(n) {
    let rows = 0;
  
    while (n >= rows + 1) {
      rows++;
      n -= rows;
    }
  
    return rows;
  }
  const n = 5;
  const result = arrangeCoins(n);
  console.log(result); // Output: 2
  