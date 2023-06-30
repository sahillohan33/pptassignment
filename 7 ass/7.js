function processString(str) {
    const stack = [];
  
    for (const char of str) {
      if (char === '#') {
        stack.pop(); // Apply backspace rule by popping from the stack
      } else {
        stack.push(char); // Push non-backspace characters onto the stack
      }
    }
  
    return stack.join('');
  }
  
  function buildStack(str) {
    const stack = [];
  
    for (const char of str) {
      if (char !== '#') {
        stack.push(char);
      } else if (stack.length > 0) {
        stack.pop();
      }
    }
  
    return stack;
  }
  
  function compareStrings(s, t) {
    const processedS = processString(s);
    const processedT = processString(t);
  
    return processedS === processedT;
  }
  const s = "ab#c";
  const t = "ad#c";
  const areEqual = compareStrings(s, t);
  console.log(areEqual); // Output: true
  