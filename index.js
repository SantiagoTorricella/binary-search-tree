function nodeFacroty(value) {
  return {
    data: value,
    left: null,
    right: null,
  };
}

function treeFactory(array) {
  return {
    root: buildTree(array),
  };
}

function buildTree(array, start = 0, end = array.length - 1) {
  if (start > end) return null;

  const mid = parseInt((start + end) / 2);
  const root = nodeFacroty(array[mid]);

  root.left = buildTree(array, start, mid - 1);
  root.right = buildTree(array, mid + 1, end);

  return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

console.log(prettyPrint(treeFactory([1, 2, 3, 7]).root));
