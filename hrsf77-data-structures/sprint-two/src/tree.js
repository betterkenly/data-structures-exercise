var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newChild = Tree(value);
	newChild.parent = this;
	this.children.push(newChild);
};
// debugger;

treeMethods.contains = function(target) {

	var search = function(tree){
		if (tree.value === target) {
			return true;
		}
		for (var i = 0 ; i < tree.children.length ; i++) {
				return  search(tree.children[i]);
			}
		}
		return false;
	}
	return search(this);
};




var tree = Tree(5);

tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
tree.contains(7);
