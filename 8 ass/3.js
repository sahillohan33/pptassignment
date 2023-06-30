function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Create a 2D array to store the minimum number of steps
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1).fill(0);
    }
  
    // Initialize the first row and first column of the dp array
    for (let i = 1; i <= m; i++) {
      dp[i][0] = i;
    }
  
    for (let j = 1; j <= n; j++) {
      dp[0][j] = j;
    }
  
    // Fill the dp array using dynamic programming
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
    }
  
    // Return the result from the bottom-right cell of the dp array
    return dp[m][n];
  }
  const word1 = "sea";
  const word2 = "eat";
  const result = minDistance(word1, word2);
  console.log(result); // Output: 2
  