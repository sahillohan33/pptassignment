class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructBinaryTree(s) {
    if (!s || s.length === 0) {
      return null;
    }
  
    // Find the index of the first opening parenthesis
    const firstParenIndex = s.indexOf('(');
  
    if (firstParenIndex === -1) {
      // The entire string represents a single node
      return new TreeNode(parseInt(s));
    }
  
    // Create a new tree node with the value before the opening parenthesis
    const rootVal = parseInt(s.substring(0, firstParenIndex));
    const root = new TreeNode(rootVal);
  
    let openParenCount = 0;
    let start = firstParenIndex;
  
    // Find the substring for the left child tree
    for (let i = start; i < s.length; i++) {
      if (s[i] === '(') {
        openParenCount++;
      } else if (s[i] === ')') {
        openParenCount--;
      }
  
      if (openParenCount === 0) {
        if (start === firstParenIndex) {
          // Recursively construct the left child tree
          root.left = constructBinaryTree(s.substring(start + 1, i));
          start = i + 1; // Move the start index to the next '('
        } else {
          // Recursively construct the right child tree
          root.right = constructBinaryTree(s.substring(start + 1, i));
        }
      }
    }
  
    return root;
  }
  
  function inorderTraversal(root) {
    if (!root) {
      return [];
    }
  
    const result = [];
  
    function traverse(node) {
      if (!node) {
        return;
      }
  
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
  
    traverse(root);
  
    return result;
  }
  const s = "4(2(3)(1))(6(5))";
  const root = constructBinaryTree(s);
  const result = inorderTraversal(root);
  
  console.log(result); // Output: [4, 2, 6, 3, 1, 5]
  