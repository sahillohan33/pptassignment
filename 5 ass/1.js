function convertTo2DArray(original, m, n) {
    const length = original.length;
    
    if (length !== m * n) {
      return []; // Return empty 2D array if it's impossible
    }
    
    const result = [];
    
    for (let i = 0; i < m; i++) {
      const row = original.slice(i * n, (i * n) + n);
      result.push(row);
    }
    
    return result;
  }
  
  // Example usage
  const original = [1, 2, 3, 4];
  const m = 2;
  const n = 2;
  const result = convertTo2DArray(original, m, n);
  console.log(result);
// Output :  [ [ 1, 2 ], [ 3, 4 ] ]