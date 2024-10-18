class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function levelOrder(callback) {
    if (typeof callback !== 'function') {
        throw new Error("A callback function is required");
    }

    let root = this.root;
    if (!root) return;

    let queue = [root];

    while (queue.length > 0) {
        let currentNode = queue.shift();
        callback(currentNode);

        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
}

function levelOrderRecursive(callback) {
    if (typeof callback !== 'function') {
        throw new Error("A callback function is required");
    }

    let root = this.root;
    if (!root) return;

    const height = getHeight(root);

    for (let i = 1; i <= height; i++) {
        traverseLevel(root, i, callback);
    }

    function getHeight(node) {
        if (!node) return 0;
        let leftHeight = getHeight(node.left);
        let rightHeight = getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    function traverseLevel(node, level, callback) {
        if (!node) return;
        if (level === 1) {
            callback(node);
        } else if (level > 1) {
            traverseLevel(node.left, level - 1, callback);
            traverseLevel(node.right, level - 1, callback);
        }
    }
}

// Export the TreeNode class and the levelOrder functions
module.exports = {
    TreeNode,
    levelOrder,
    levelOrderRecursive
};
