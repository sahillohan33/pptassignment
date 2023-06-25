function nextPermutation(nums) {
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
    if (i >= 0) {
      let j = nums.length - 1;
      while (j > i && nums[j] <= nums[i]) {
        j--;
      }
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    reverse(nums, i + 1);
  }
  function reverse(nums, start) {
    let i = start;
    let j = nums.length - 1;
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
  const nums = [1, 2, 3];
  nextPermutation(nums);
  console.log(nums); // Output: [1, 3, 2]
  