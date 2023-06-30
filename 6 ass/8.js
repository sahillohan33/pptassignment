function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length; // Number of rows in mat1
    const k = mat1[0].length; // Number of columns in mat1
    const n = mat2[0].length; // Number of columns in mat2
  
    // Create an empty result matrix filled with zeros
    const result = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  
    // Create a transpose of mat2 for efficient column access
    const transposeMat2 = [];
    for (let j = 0; j < n; j++) {
      transposeMat2[j] = [];
      for (let i = 0; i < k; i++) {
        transposeMat2[j][i] = mat2[i][j];
      }
    }
  
    // Perform matrix multiplication
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let sum = 0;
  
        for (let p = 0; p < k; p++) {
          if (mat1[i][p] !== 0 && transposeMat2[j][p] !== 0) {
            sum += mat1[i][p] * transposeMat2[j][p];
          }
        }
  
        result[i][j] = sum;
      }
    }
  
    return result;
  }
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  const result = multiplySparseMatrices(mat1, mat2);
  console.log(result);
  // Output : [ [ 7, 0, 0 ], [ -7, 0, 3 ] ]
  