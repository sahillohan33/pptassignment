function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === '(' || char === '*') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length > 0 && (stack[stack.length - 1] === '(' || stack[stack.length - 1] === '*')) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    let openParenCount = 0;
  
    while (stack.length > 0) {
      const top = stack.pop();
  
      if (top === '(') {
        openParenCount++;
      } else if (top === '*') {
        if (openParenCount > 0) {
          openParenCount--;
        }
      } else {
        return false;
      }
    }
  
    return openParenCount === 0;
  }
  const s = "()";
  const result = isValid(s);
  console.log(result); // Output: true
  