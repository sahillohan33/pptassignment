function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      // Check for duplicate characters in s
      const seen = new Set();
      for (let char of s) {
        if (seen.has(char)) {
          return true;
        }
        seen.add(char);
      }
      return false;
    }
  
    const indices = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        indices.push(i);
      }
      if (indices.length > 2) {
        return false;
      }
    }
  
    if (indices.length !== 2) {
      return false;
    }
  
    return (
      s[indices[0]] === goal[indices[1]] && s[indices[1]] === goal[indices[0]]
    );
  }
  const s = "ab";
  const goal = "ba";
  const canSwap = buddyStrings(s, goal);
  
  console.log(canSwap); // Output: true
  