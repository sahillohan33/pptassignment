function findDisjointElements(nums1, nums2) {
    const distinctNums1 = new Set(nums1);
    const distinctNums2 = new Set(nums2);
    const result = [[], []];
    for (let num of distinctNums1) {
      if (!distinctNums2.has(num)) {
        result[0].push(num);
      }
    }
    for (let num of distinctNums2) {
      if (!distinctNums1.has(num)) {
        result[1].push(num);
      }
    }
    return result;
  }
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  const result = findDisjointElements(nums1, nums2);
  console.log(result); // Output: [[1, 3], [4, 6]]
  