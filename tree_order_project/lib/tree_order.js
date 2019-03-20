function inOrderArray(root) {
	if (!root) return [];
	let result = [];

	inOrderArray(root.left);
	result.push(root.val);
	inOrderArray(root.right);
}

function postOrderArray(root) {
	if (!root) return [];

}


module.exports = {
    inOrderArray,
    postOrderArray
};