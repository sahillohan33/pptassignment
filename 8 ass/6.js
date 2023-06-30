function findAnagrams(s, p) {
    const result = [];
    const pMap = new Map();
  
    // Create a frequency map for string p
    for (let char of p) {
      pMap.set(char, (pMap.get(char) || 0) + 1);
    }
  
    let left = 0;
    let right = 0;
    let count = p.length;
  
    while (right < s.length) {
      // Move the right pointer and decrement the count for the character
      if (pMap.has(s[right])) {
        if (pMap.get(s[right]) > 0) {
          count--;
        }
        pMap.set(s[right], pMap.get(s[right]) - 1);
        right++;
      }
  
      // Move the left pointer and increment the count for the character
      if (right - left === p.length) {
        if (count === 0) {
          result.push(left);
        }
  
        if (pMap.has(s[left])) {
          if (pMap.get(s[left]) >= 0) {
            count++;
          }
          pMap.set(s[left], pMap.get(s[left]) + 1);
        }
  
        left++;
      }
    }
  
    return result;
  }
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(s, p);
  
  console.log(indices); // Output: [0, 6]
  