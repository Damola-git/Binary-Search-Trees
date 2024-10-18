// Import the tree functions from trees.js
const { TreeNode, levelOrder, levelOrderRecursive } = require('./trees.js');

// Create a tree structure
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// Invoke the levelOrder function
console.log("Iterative Level Order Traversal:");
levelOrder.call({ root }, node => console.log(node.value));

// Invoke the levelOrderRecursive function
console.log("Recursive Level Order Traversal:");
levelOrderRecursive.call({ root }, node => console.log(node.value));
