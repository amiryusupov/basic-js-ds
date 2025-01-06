const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  tree = null;
  root() {
    return this.tree;
  }
  add(data) {
    this.tree = this.addValue(this.tree, data);
  }
  addValue(tree, data) {
    if (tree === null) {
      return new Node(data);
    }
    if (data > tree.data) {
      tree.right = this.addValue(tree.right, data);
    } else if (data < tree.data) {
      tree.left = this.addValue(tree.left, data);
    }
    return tree;
  }



  has(data) {
    return this.searchValue(this.tree, data) !== null;
  }

  searchValue(tree, data) {
    if (tree === null || tree.data === data) {
      return tree;
    }

    if (data > tree.data) {
      return this.searchValue(tree.right, data);
    }
    if (data < tree.data) {
      return this.searchValue(tree.left, data);
    }
  }

  find(data) {
    return this.searchValue(this.tree, data);
  }

  remove(data) {
    this.tree = this.removeValue(this.tree, data);
  }

  removeValue(tree, data) {
    if (!tree) {
      return null;
    }
    if (data < tree.data) {
      tree.left = this.removeValue(tree.left, data);
      return tree;
    } else if (data > tree.data) {
      tree.right = this.removeValue(tree.right, data);
      return tree;
    } else if (data === tree.data) {
      if (!tree.left && !tree.right) {
        return null;
      }
      if (!tree.right) {
        return tree.left;
      }
      if (!tree.left) {
        return tree.right;
      }

      let minimumChildOfRightNode = tree.right;
      while (minimumChildOfRightNode.left) {
        minimumChildOfRightNode = minimumChildOfRightNode.left;
      }
      tree.data = minimumChildOfRightNode.data;
      tree.right = this.removeValue(tree.right, minimumChildOfRightNode.data);
      return tree;
    }
  }

  min() {
    let tree = this.tree;
    while (tree.left) {
      tree = tree.left;
    }
    return tree.data;
  }

  max() {
    let tree = this.tree;
    while (tree.right) {
      tree = tree.right;
    }
    return tree.data;
  }
}

module.exports = {
  BinarySearchTree
};