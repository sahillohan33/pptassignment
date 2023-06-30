function findMaxLength(nums) {
    const countMap = new Map(); // Stores the count of 0s and 1s encountered
    countMap.set(0, -1); // Initialize the map with count 0 and index -1
    let count = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        // Increment count by 1 if the current element is 1, decrement otherwise
        count += nums[i] === 1 ? 1 : -1;

        // If count exists in the map, update maxLength
        if (countMap.has(count)) {
            maxLength = Math.max(maxLength, i - countMap.get(count));
        } else {
            countMap.set(count, i); // Store the index of count if it's not already present
        }
    }

    return maxLength;
}
const nums = [0, 1];
console.log(findMaxLength(nums));  // Output: 2
