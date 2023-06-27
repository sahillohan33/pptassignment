function arrangeCoins(n) {
    let row = 1;
    let coinsUsed = 0;
    while (coinsUsed + row <= n) {
      coinsUsed += row;
      row++;
    }
    return row - 1;
  }
  const n = 5;
  const result = arrangeCoins(n);
  console.log(result); // Output : 2
  