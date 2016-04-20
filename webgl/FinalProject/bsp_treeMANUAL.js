//By Matthew Gillatt
//The BSPTree has a list of Nodes, and a root Node
//A Node has an index to the Segment it contains, and the index of its left/right children
//-1 for a child means there is no child there.  If both left and right are -1, this is a leaf Node.

//That map should be included before this, so we can use segList[]

var treeRoot = 0;

var nodeList = [];

var Node = function (s, l, r) { //segment, left node, right node indices
  this.s = s;
  this.l = l;
  this.r = r;
}

buildTree = function() { //manually create tree for the map "testcube.js"
  //simulate segment splitting now
  //segList[5] =  new Segment([  8.0, -8.0], [  8.0,  8.0], [0.0, 0.3, 0.0]); //f
  //segList[6] =  new Segment([ -8.0, -8.0], [  8.0, -8.0], [0.3, 0.0, 0.0]); //g
  //segList[7] =  new Segment([ -8.0,  8.0], [ -8.0, -8.0], [0.0, 0.0, 0.3]); //h
  segList[5] =  new Segment([  8.0,  1.0], [  8.0,  8.0], [0.0, 0.3, 0.0]); //f0
  segList[8] =  new Segment([  8.0, -8.0], [  8.0,  1.0], [0.0, 0.3, 0.0]); //f1
  segList[6] =  new Segment([  1.0, -8.0], [  8.0, -8.0], [0.3, 0.0, 0.0]); //g0
  segList[10] = new Segment([ -8.0, -8.0], [  1.0, -8.0], [0.3, 0.0, 0.0]); //g1
  segList[7] =  new Segment([ -8.0,  8.0], [ -8.0,  1.0], [0.0, 0.0, 0.3]); //h0
  segList[9] =  new Segment([ -8.0, -1.0], [ -8.0, -8.0], [0.0, 0.0, 0.3]); //h1
  segList[11] = new Segment([ -8.0,  1.0], [ -8.0, -1.0], [0.0, 0.0, 0.3]); //h2
  //[a,b,c,d,e,f0,g0,h0,f1,h1,g1,h2]

  //create nodes from manual tree building
  //In this tree, left child is in front of this segment, right child is behind
  nodeList[0] =  new Node( 0,  1,  4); //Node 0 has Segment 0, left Node is 1, and right Node is 4
  nodeList[1] =  new Node( 4,  2, -1);
  nodeList[2] =  new Node( 5,  3, -1);
  nodeList[3] =  new Node( 7, -1, -1);
  nodeList[4] =  new Node( 1,  5,  7);
  nodeList[5] =  new Node( 6,  6, -1);
  nodeList[6] =  new Node( 8, -1, -1);
  nodeList[7] =  new Node( 2,  8, 10);
  nodeList[8] =  new Node( 9,  9, -1);
  nodeList[9] =  new Node(10, -1, -1);
  nodeList[10] = new Node( 3, 11, -1);
  nodeList[11] = new Node(11, -1, -1);
}