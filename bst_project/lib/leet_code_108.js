// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
  if (!nums.length) return null;

  let mid = parseInt(nums.length / 2);
  let root = new TreeNode(nums[mid]);

  let left = nums.slice(0, mid);
  let right = nums.slice(mid+1);

  let leftSubTree = sortedArrayToBST(left);
  let rightSubTree = sortedArrayToBST(right);

  root.left = leftSubTree;
  root.right = rightSubTree;

  return root;
}