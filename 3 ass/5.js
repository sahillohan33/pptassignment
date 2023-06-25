function plusOne(digits) {
    const n = digits.length;
    let carry = 1;
    for (let i = n - 1; i >= 0; i--) {
      const sum = digits[i] + carry;
      digits[i] = sum % 10;
      carry = Math.floor(sum / 10);
      if (carry === 0) {
        break;
      }
    }
    if (carry > 0) {
      digits.unshift(carry);
    }
    return digits;
  }
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result); // Output: [1, 2, 4]
  