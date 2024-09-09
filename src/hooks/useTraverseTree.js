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

  return { insertNode };
};

export default useTraverseTree;
