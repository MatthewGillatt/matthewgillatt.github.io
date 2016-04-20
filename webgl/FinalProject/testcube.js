//By Matthew Gillatt
//If you create a script with these functions and variables, and change which script is loaded in main.html,
//you'll load that geometry instead!

//segment.js is included before this map, use Segment objects in the map
//A Map has a list of segments, floor and ceiling height and color, bounds, and start position
//We won't make a map object, instead define global variables

var mapFloorHeight = -0.4;
var mapFloorColor = [1.0, 0.75, 0.5]; //brown
var mapCeilingHeight = 1.0;
var mapCeilingColor = [0.0, 1.0, 1.0]; //cyan
var mapMinX = -8.0;
var mapMaxX = 8.0;
var mapMinZ = -8.0;
var mapMaxZ = 8.0;
var mapStartPos = [0.0, 0.0, 5.0];
var mapStartDir = 0;

var segList = [];

setMap = function() {
  segList[0] =  new Segment([ -1.0,  1.0], [  1.0,  1.0], [1.0, 1.0, 1.0]);
  segList[1] =  new Segment([  1.0,  1.0], [  1.0, -1.0], [0.0, 1.0, 0.0]);
  segList[2] =  new Segment([  1.0, -1.0], [ -1.0, -1.0], [1.0, 0.0, 0.0]);
  segList[3] =  new Segment([ -1.0, -1.0], [ -1.0,  1.0], [0.0, 0.0, 1.0]);
  segList[4] =  new Segment([  8.0,  8.0], [ -8.0,  8.0], [0.1, 0.1, 0.1]);
  segList[5] =  new Segment([  8.0, -8.0], [  8.0,  8.0], [0.0, 0.3, 0.0]);
  segList[6] =  new Segment([ -8.0, -8.0], [  8.0, -8.0], [0.3, 0.0, 0.0]);
  segList[7] =  new Segment([ -8.0,  8.0], [ -8.0, -8.0], [0.0, 0.0, 0.3]);
  //segList[8] =  new Segment([  1.0,  0.0], [  3.0,  2.0], [1.0, 1.0, 0.0]); //In-class example, won't work with presentation unless AUTO
}