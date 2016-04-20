//By Matthew Gillatt
//The BSPTree has a list of Nodes, and a root Node
//A Node has an index to the Segment it contains, and the index of its left/right children
//-1 for a child means there is no child there.  If both left and right are -1, this is a leaf Node.
//In this tree, left child is in front of this segment, right child is behind

//That map should be included before this, so we can use segList[]

var treeRoot = 0;

var nodeList = [];

var Node = function (s, l, r) { //segment, left node, right node indices
  this.s = s;
  this.l = l;
  this.r = r;
}

buildTree = function() {
  //alert("Segments in: " + segList.length);
  var inputArray = [];
  for (i=0; i<segList.length; i++) {
    inputArray[i] = i;
  }
  treeRoot = buildNode(inputArray); //recursive node building
  //alert("Segments out: " + segList.length);
}

var buildNode = function(subSegs) { //returns the built Node's index
  if (subSegs.length == 0) {return -1;}
  var currentIndex = subSegs[0];
  var currentSeg = segList[currentIndex];
  var leftList = [];
  var rightList = [];
  for (i=1; i<subSegs.length; i++) {
    var testIndex = subSegs[i];
    var testSeg = segList[testIndex];
    var fronts = 0;
    var backs = 0;
    var AFront = 0;
    var BFront = 0;
    AFront = currentSeg.inFront(testSeg.pointA);
    if (AFront > 0) {fronts++;}
    else if (AFront < 0) {backs++;} //if AFront == 0, nothing increases
    BFront = currentSeg.inFront(testSeg.pointB);
    if (BFront > 0) {fronts++;}
    else if (BFront < 0) {backs++;}
    if (fronts > 0 && backs > 0) {
      //SPANNING: Split test segment, add halves to each list
      //alert("Spanning Segment found");

      //Math used from this example: http://jsfiddle.net/justin_c_rounds/Gd2S2/
      //1st we must find the intersection point, which will be on testSeg
      var curDeltaX = currentSeg.pointB[0] - currentSeg.pointA[0];
      var curDeltaZ = currentSeg.pointB[1] - currentSeg.pointA[1];
      var testDeltaX = testSeg.pointB[0] - testSeg.pointA[0];
      var testDeltaZ = testSeg.pointB[1] - testSeg.pointA[1];

      var den = (testDeltaZ * curDeltaX) - (testDeltaX * curDeltaZ);
      //denominator can't be 0, we already know testSeg spans the plane of currentSeg

      var zDif = currentSeg.pointA[1] - testSeg.pointA[1];
      var xDif = currentSeg.pointA[0] - testSeg.pointA[0];
      
      var num = (testDeltaX * zDif) - (testDeltaZ * xDif);
      var scale = num / den;

      var newX = currentSeg.pointA[0] + (scale * curDeltaX);
      var newZ = currentSeg.pointA[1] + (scale * curDeltaZ);
      var newPoint = [newX, newZ];
      //alert("Intersection point found: " + newPoint[0] + ", " + newPoint[1]);

      //create new segments for (pointA, newPoint) and (newPoint, pointB)
      var oldB = testSeg.pointB;
      var testColor = testSeg.color;

      segList[testIndex] = new Segment(testSeg.pointA, newPoint, testColor);
      var newIndex = segList.length;
      segList[newIndex] = new Segment(newPoint, oldB, testColor);

      if (AFront > 0) {//A in front of currentSeg means old segment is in front, new in back
        leftList.push(testIndex);
        rightList.push(newIndex);
      } else {
        leftList.push(newIndex);
        rightList.push(testIndex);
      }
    } else if (fronts > 0 && backs == 0) {
      //IN FRONT: Put test segment in left list
      //alert("Front Segment found");
      leftList.push(testIndex);
    } else if (fronts == 0 && backs > 0) {
      //BEHIND: Put test segment in right list
      //alert("Behind Segment found");
      rightList.push(testIndex);
    } else { //must be fronts == 0 && backs == 0
      //COLLINEAR: Special case.  Let's put test segment in right list for now
      //alert("Collinear Segment found");
      rightList.push(testIndex);
    }
  }
  var nodeIndex = nodeList.length;
  nodeList[nodeIndex] = 0; //reserve a node index before building child trees
  var leftChild = buildNode(leftList);
  var rightChild = buildNode(rightList);
  var currentNode = new Node(currentIndex, leftChild, rightChild);
  nodeList[nodeIndex] = currentNode;
  return nodeIndex;
}