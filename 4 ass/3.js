function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];
    for (let i = 0; i < cols; i++) {
      transposed[i] = [];
  
      for (let j = 0; j < rows; j++) {
        transposed[i][j] = matrix[j][i];
      }
    }
    return transposed;
  }
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const result = transpose(matrix);
  console.log(result); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
  