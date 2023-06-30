function generateMatrix(n) {
    // Create an empty matrix filled with zeros
    const matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  
    let num = 1; // Starting number
    let topRow = 0;
    let bottomRow = n - 1;
    let leftColumn = 0;
    let rightColumn = n - 1;
  
    while (topRow <= bottomRow && leftColumn <= rightColumn) {
      // Fill top row
      for (let i = leftColumn; i <= rightColumn; i++) {
        matrix[topRow][i] = num;
        num++;
      }
      topRow++;
  
      // Fill right column
      for (let i = topRow; i <= bottomRow; i++) {
        matrix[i][rightColumn] = num;
        num++;
      }
      rightColumn--;
  
      // Fill bottom row
      if (topRow <= bottomRow) {
        for (let i = rightColumn; i >= leftColumn; i--) {
          matrix[bottomRow][i] = num;
          num++;
        }
        bottomRow--;
      }
  
      // Fill left column
      if (leftColumn <= rightColumn) {
        for (let i = bottomRow; i >= topRow; i--) {
          matrix[i][leftColumn] = num;
          num++;
        }
        leftColumn++;
      }
    }
  
    return matrix;
  }
  const n = 3;
  const matrix = generateMatrix(n);
  console.log(matrix);
  // Output: [ [ 1, 2, 3 ], [ 8, 9, 4 ], [ 7, 6, 5 ] ]
