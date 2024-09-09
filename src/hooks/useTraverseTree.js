const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    return {
      ...tree,
      items: tree.items.map((obj) => insertNode(obj, folderId, item, isFolder)),
    };
  }

  function deleteNode(tree, nodeId) {
    if (tree.id === nodeId) {
      return null; // Remove this node
    }

    return {
      ...tree,
      items: tree.items
        .map((obj) => deleteNode(obj, nodeId))
        .filter((item) => item !== null), // Filter out nulls
    };
  }

  function renameNode(tree, nodeId, newName) {
    if (tree.id === nodeId) {
      return {
        ...tree,
        name: newName,
      };
    }

    return {
      ...tree,
      items: tree.items.map((obj) => renameNode(obj, nodeId, newName)),
    };
  }

  return { insertNode, deleteNode, renameNode };
};

export default useTraverseTree;
