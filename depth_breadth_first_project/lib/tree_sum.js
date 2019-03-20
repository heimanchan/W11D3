function treeSum(root) {
	let stack = [root];
	let result = 0;

	if (root === null) return 0;
	while (stack.length) {
		let node = stack.pop();
		result += node.val;

		if (node.right) stack.push(node.right);
		if (node.left) stack.push(node.left);
	}

	return result;
}


module.exports = {
	treeSum
};