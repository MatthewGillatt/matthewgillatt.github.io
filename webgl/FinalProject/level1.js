//By Matthew Gillatt
//If you create a script with these functions and variables, and change which script is loaded in main.html,
//you'll load that geometry instead!

//segment.js is included before this map, use Segment objects in the map
//A Map has a list of segments, floor and ceiling height and color, bounds, and start position
//We won't make a map object, instead define global variables

var mapFloorHeight = -0.4;
var mapFloorColor = [1.0, 1.0, 1.0]; //I can make these colors more apparant by having another shader that
 //ignores lighting on the floor and ceiling
var mapCeilingHeight = 2.0;
var mapCeilingColor = [1.0, 1.0, 1.0];
var mapMinX = -20.0;
var mapMaxX = 20.0;
var mapMinZ = -20.0;
var mapMaxZ = 20.0;
var mapStartPos = [0.0, 0.0, 0.0];
var mapStartDir = 0;

var segList = [];

setMap = function() {
  //outer walls
  segList.push(new Segment([ 20.0,  20.0], [-20.0,  20.0], [0.25, 0.25, 0.25]));
  segList.push(new Segment([-20.0,  20.0], [-20.0, -20.0], [0.25, 0.25, 0.25]));
  segList.push(new Segment([-20.0, -20.0], [ 20.0, -20.0], [0.25, 0.25, 0.25]));
  segList.push(new Segment([ 20.0, -20.0], [ 20.0,  20.0], [0.25, 0.25, 0.25]));

  //collinear columns
  segList.push(new Segment([-17.0,  17.0], [-15.0,  17.0], [0.75, 0.0, 0.0]));
  segList.push(new Segment([-15.0,  17.0], [-15.0,  15.0], [0.75, 0.0, 0.0]));
  segList.push(new Segment([-15.0,  15.0], [-17.0,  15.0], [0.75, 0.0, 0.0]));
  segList.push(new Segment([-17.0,  15.0], [-17.0,  17.0], [0.75, 0.0, 0.0]));

  segList.push(new Segment([-17.0,  13.0], [-15.0,  13.0], [0.75, 0.5, 0.0]));
  segList.push(new Segment([-15.0,  13.0], [-15.0,  11.0], [0.75, 0.5, 0.0]));
  segList.push(new Segment([-15.0,  11.0], [-17.0,  11.0], [0.75, 0.5, 0.0]));
  segList.push(new Segment([-17.0,  11.0], [-17.0,  13.0], [0.75, 0.5, 0.0]));

  segList.push(new Segment([-17.0,   9.0], [-15.0,   9.0], [0.75, 0.75, 0.0]));
  segList.push(new Segment([-15.0,   9.0], [-15.0,   7.0], [0.75, 0.75, 0.0]));
  segList.push(new Segment([-15.0,   7.0], [-17.0,   7.0], [0.75, 0.75, 0.0]));
  segList.push(new Segment([-17.0,   7.0], [-17.0,   9.0], [0.75, 0.75, 0.0]));

  //big X
  segList.push(new Segment([-17.0, -17.0], [-13.0, -13.0], [0.75, 0.0,  0.0]));
  segList.push(new Segment([-17.0, -13.0], [-13.0, -17.0], [ 0.0, 0.0, 0.75]));

  //intersecting squares
  segList.push(new Segment([ -2.0, -12.0], [  2.0, -12.0], [0.0, 0.5, 0.0]));
  segList.push(new Segment([  2.0, -12.0], [  2.0, -16.0], [0.0, 0.5, 0.0]));
  segList.push(new Segment([  2.0, -16.0], [ -2.0, -16.0], [0.0, 0.5, 0.0]));
  segList.push(new Segment([ -2.0, -16.0], [ -2.0, -12.0], [0.0, 0.5, 0.0]));

  segList.push(new Segment([  0.0, -11.0], [  3.0, -14.0], [0.5, 0.0, 0.5]));
  segList.push(new Segment([  3.0, -14.0], [  0.0, -17.0], [0.5, 0.0, 0.5]));
  segList.push(new Segment([  0.0, -17.0], [ -3.0, -14.0], [0.5, 0.0, 0.5]));
  segList.push(new Segment([ -3.0, -14.0], [  0.0, -11.0], [0.5, 0.0, 0.5]));

  //long curve
  segList.push(new Segment([  3.5,  13.5], [  2.5,  15.5], [0.75, 0.75, 0.75]));
  segList.push(new Segment([  2.5,  15.5], [  1.5,  16.5], [0.75, 0.75, 0.75]));
  segList.push(new Segment([  1.5,  16.5], [  0.5,  17.0], [0.75, 0.75, 0.75]));
  segList.push(new Segment([  0.5,  17.0], [ -0.5,  17.0], [0.75, 0.75, 0.75]));
  segList.push(new Segment([ -0.5,  17.0], [ -1.5,  16.5], [0.75, 0.75, 0.75]));
  segList.push(new Segment([ -1.5,  16.5], [ -2.5,  15.5], [0.75, 0.75, 0.75]));
  segList.push(new Segment([ -2.5,  15.5], [ -3.5,  13.5], [0.75, 0.75, 0.75]));
  segList.push(new Segment([  5.0,  20.0], [  3.5,  13.5], [0.75, 0.75, 0.75]));
  segList.push(new Segment([ -3.5,  13.5], [ -5.0,  20.0], [0.75, 0.75, 0.75]));

  //room
  segList.push(new Segment([ 20.0,  -6.0], [  9.0,  -6.0], [ 0.5,  0.0,  0.0]));
  segList.push(new Segment([  9.0,  -6.0], [  9.0,  -2.0], [ 0.5,  0.0,  0.0]));
  segList.push(new Segment([  9.0,  -2.0], [ 10.0,  -2.0], [0.25, 0.25, 0.25]));
  segList.push(new Segment([ 10.0,  -2.0], [ 10.0,  -5.0], [ 0.0, 0.25, 0.25]));
  segList.push(new Segment([ 10.0,  -5.0], [ 20.0,  -5.0], [ 0.0, 0.25, 0.25]));

  segList.push(new Segment([ 20.0,   5.0], [ 10.0,   5.0], [ 0.0, 0.25, 0.25]));
  segList.push(new Segment([ 10.0,   5.0], [ 10.0,   2.0], [ 0.0, 0.25, 0.25]));
  segList.push(new Segment([ 10.0,   2.0], [  9.0,   2.0], [0.25, 0.25, 0.25]));
  segList.push(new Segment([  9.0,   2.0], [  9.0,   6.0], [ 0.5,  0.0,  0.0]));
  segList.push(new Segment([  9.0,   6.0], [ 20.0,   6.0], [ 0.5,  0.0,  0.0]));

  //We are in a function, and can generate segments algorithmically
  for (i=0; i<20; i++) {
    segList.push(new Segment([7.0 + (0.5*i), 15.0], [7.0 + (0.5*i), 18.0], [ 0.0, 0.0, 1.0 - (0.05*i)]));
  }

  //Random segments created each time you load the map!
  for (i=0; i<20; i++) {
    segList.push(new Segment([8.0 + (Math.random()*10.0), -18.0 + (Math.random()*10.0)],
      [8.0 + (Math.random()*10.0), -18.0 + (Math.random()*10.0)],
      [Math.random(), Math.random(), Math.random()]));
  }
}