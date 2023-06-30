function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let start = 0;
    let end = m * n - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const row = Math.floor(mid / n);
      const col = mid % n;
      const value = matrix[row][col];
  
      if (value === target) {
        return true;
      } else if (value < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return false;
  }
  
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ];
  const target = 3;
  const found = searchMatrix(matrix, target);
  console.log(found); // Output: true
  