function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const s_to_t = {};
    const t_to_s = {};
  
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      const d = t[i];
  
      if (!(c in s_to_t) && !(d in t_to_s)) {
        s_to_t[c] = d;
        t_to_s[d] = c;
      } else if (s_to_t[c] !== d || t_to_s[d] !== c) {
        return false;
      }
    }
  
    return true;
  }
  const s = "egg";
  const t = "add";
  console.log(isIsomorphic(s, t));  // Output: true
  