function sortedSquares(nums) {
    const squares = nums.map(num => num * num);
    squares.sort((a, b) => a - b);
    return squares;
  }
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result); // Output: [0, 1, 9, 16, 100]
  