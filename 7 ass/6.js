function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const concatenated = s + s;
    return concatenated.includes(goal);
  }
  
  const s = "abcde";
  const goal = "cdeab";
  const canRotate = rotateString(s, goal);
  console.log(canRotate); // Output: true
  