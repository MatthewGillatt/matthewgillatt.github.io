//By Matthew Gillatt
//A Segment has a vec2 pointA, a vec2 pointB, and a vec3 color
//The vec2 points are (x,z) pairs in the y plane

var Segment = function (pointA, pointB, color) {
  this.pointA = pointA;
  this.pointB = pointB;
  this.color = color
};

Segment.prototype.getNormal = function() {
  var s = [this.pointB[0]-this.pointA[0], 0.0, this.pointB[1]-this.pointA[1]];
  vec3.normalize(s);
  var u = [0.0, 1.0, 0.0];
  var n = vec3.create();
  vec3.cross(s, u, n); //the front of the segment is on the 'right' of the B-A vector
  vec3.normalize(n);
  return n;
};

Segment.prototype.inFront = function(point) { //point is vec2 (x,z) to test
  var n = this.getNormal();
  var t = [point[0]-this.pointA[0], 0, point[1]-this.pointA[1]];
  var dot = 0.0;
  dot = vec3.dot(t, n);
  return dot;
  //The dot product should be the distance from the Segment's plane to the test point.
  //Positive return means point is in front of the Segment's plane
  //Negative return means point is behind the Segment's plane
  //0 return means point is collinear with the Segment's plane
}