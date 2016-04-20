//By Matthew Gillatt
//If you create a script with these functions and variables, and change which script is loaded in main.html,
//you'll load that geometry instead!

//segment.js is included before this map, use Segment objects in the map
//A Map has a list of segments, floor and ceiling height and color, bounds, and start position
//We won't make a map object, instead define global variables

var mapFloorHeight = -1.0;
var mapFloorColor = [0.0, 0.0, 0.0];
var mapCeilingHeight = 1.0;
var mapCeilingColor = [0.0, 0.0, 0.0];
var mapMinX = -1.0;
var mapMaxX = 1.0;
var mapMinZ = -1.0;
var mapMaxZ = 1.0;
var mapStartPos = [0.0, 0.0, 0.0];
var mapStartDir = 0;

var segList = [];

setMap = function() {
  //segList[0] =  new Segment([Ax, Az], [Bx, Bz], [R, G, B]);
  //etc...
}