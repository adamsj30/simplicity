/*
	This class contains information about an image.
*/

private var x_location;
private var y_location;
private var width;
private var height;
private var filename;

// Constructor for image class
public function image(filename, x_location, y_location, width, height){
	this.filename = filename;
	this.x_location = x_location;
	this.y_location = y_location;
	this.width = width;
	this.height = height;
}

public function setXLocation(x){
	x_location = x;
}

public function setYLocation(y){
	y_location = y;
}

public function setXSize(width){
	this.width = width;
}

public function setYSize(height){
	this.height = height;
}

public function draw(){
	// ToDo
}