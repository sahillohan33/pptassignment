function compress(chars) {
    let writeIndex = 0;
    let count = 1;
  
    for (let i = 0; i < chars.length; i++) {
      if (chars[i] === chars[i + 1]) {
        count++;
      } else {
        chars[writeIndex++] = chars[i];
  
        if (count > 1) {
          const countStr = count.toString();
          for (let j = 0; j < countStr.length; j++) {
            chars[writeIndex++] = countStr[j];
          }
        }
  
        count = 1;
      }
    }
  
    return writeIndex;
  }
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const compressedLength = compress(chars);
  
  console.log(compressedLength); // Output: 6
  console.log(chars.slice(0, compressedLength)); // Output: ["a", "2", "b", "2", "c", "3"]
  