function reverseWords(s) {
    // Split the sentence into an array of words
    const words = s.split(' ');
  
    // Iterate over each word and reverse its characters
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseString(words[i]);
    }
  
    // Join the array of words back into a string
    return words.join(' ');
  }
  
  // Helper function to reverse a string
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const s = "Let's take LeetCode contest";
  const reversed = reverseWords(s);
  console.log(reversed); // Output: "s'teL ekat edoCteeL tsetnoc"
  