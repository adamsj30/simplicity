/*
	This class keeps track of objects on the screen and their physical locations
*/

private var x_location;
private var y_location;
private var width;
private var height;

// Constructor for object class
public function object(x_location, y_location, width, height){
	this.x_location = x_location;
	this.y_location = y_location;
	this.width = width;
	this.height = height;
}

// Moves objects location
public function move(x_distance, y_distance){
	x_location = x_location + x_distance;
	y_location = y_location + y_distance;
}

// Get X location
public function getX(){
	return x_location;
}

// Get Y location
public function getY(){
	return y_location;
}

// Set X location
public function setX(x_location){
	this.x_location = x_location;
}

// Set Y location
public function setY(y_location){
	this.y_location = y_location;
}