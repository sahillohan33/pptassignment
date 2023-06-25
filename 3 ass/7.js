function findMissingRanges(nums, lower, upper) {
    const result = [];
    let start = lower;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > start) {
        result.push(createRange(start, nums[i] - 1));
        start = nums[i] + 1;
      } else if (nums[i] === start) {
        start++;
      }
    }
    if (start <= upper) {
      result.push(createRange(start, upper));
    }
    return result;
  }
  function createRange(start, end) {
    if (start === end) {
      return [start.toString()];
    } else {
      return [start.toString(), end.toString()];
    }
  }
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const result = findMissingRanges(nums, lower, upper);
  console.log(result); // Output: [[2,2],[4,49],[51,74],[76,99]]
  