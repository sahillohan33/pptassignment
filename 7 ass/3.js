function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';
  
    while (i >= 0 || j >= 0) {
      const x = i >= 0 ? parseInt(num1[i]) : 0;
      const y = j >= 0 ? parseInt(num2[j]) : 0;
      const digitSum = x + y + carry;
      carry = Math.floor(digitSum / 10);
      result = (digitSum % 10) + result;
      i--;
      j--;
    }
  
    if (carry > 0) {
      result = carry + result;
    }
  
    return result;
  }
  const num1 = "11";
  const num2 = "123";
  const sum = addStrings(num1, num2);
  console.log(sum); // Output: "134"
  