function reverseStr(s, k) {
    const chars = s.split(''); // Convert string to array of characters
  
    for (let i = 0; i < chars.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, chars.length - 1); // Adjust end index if fewer than k characters are remaining
  
      // Reverse the first k characters in the current 2k segment
      while (start < end) {
        [chars[start], chars[end]] = [chars[end], chars[start]]; // Swap characters
        start++;
        end--;
      }
    }
  
    return chars.join(''); // Join the array of characters back into a string
  }
  const s = "abcdefg";
  const k = 2;
  const reversed = reverseStr(s, k);
  console.log(reversed); // Output: "bacdfeg"
  