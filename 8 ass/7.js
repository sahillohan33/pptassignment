function decodeString(s) {
    const stack = [];
    let currentStr = '';
    let count = 0;
  
    for (let i = 0; i < s.length; i++) {
      if (/[0-9]/.test(s[i])) {
        // Update the count if the character is a digit
        count = count * 10 + parseInt(s[i]);
      } else if (s[i] === '[') {
        // Push the current substring and count to the stack
        stack.push(currentStr);
        stack.push(count);
        currentStr = '';
        count = 0;
      } else if (s[i] === ']') {
        // Retrieve the count and previous substring from the stack
        const prevCount = stack.pop();
        const prevStr = stack.pop();
  
        // Repeat the current substring based on the count
        currentStr = prevStr + currentStr.repeat(prevCount);
      } else {
        // Append the character to the current substring
        currentStr += s[i];
      }
    }
  
    return currentStr;
  }
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  
  console.log(decodedString); // Output: "aaabcbc"
  