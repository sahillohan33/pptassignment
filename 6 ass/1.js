function reconstructPermutation(s) {
    const n = s.length;
    let perm = [];
    let low = 0;
    let high = n;
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        perm.push(low);
        low++;
      } else if (s[i] === 'D') {
        perm.push(high);
        high--;
      }
    }
    perm.push(low);
    return perm;
  }
  const s = "IDID";
  const perm = reconstructPermutation(s);
  console.log(perm); // Output : [0, 4, 1, 3, 2]
  