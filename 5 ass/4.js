function findDisappearedNumbers(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const result1 = [];
    const result2 = [];
     for (const num of nums1) {
        if (!set2.has(num)) {
            result1.push(num);
        }
    }
    for (const num of nums2) {
        if (!set1.has(num)) {
            result2.push(num);
        }
    }
    return [result1, result2];
}
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const result = findDisappearedNumbers(nums1, nums2);
console.log(result); // Output : [[1, 3], [4, 6]]
