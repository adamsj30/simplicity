/*
	This class contains information about an image.
*/

var x_location;
var y_location;
var width;
var height;
var filename;

// Constructor for image class
function image(filename, x_location, y_location, width, height){
	this.filename = filename;
	this.x_location = x_location;
	this.y_location = y_location;
	this.width = width;
	this.height = height;
	return this;
}

function setXLocation(x){
	x_location = x;
}

function setYLocation(y){
	y_location = y;
}

function getXLocation(){
	return x_location;
}

function getYLocation(){
	return y_location;
}

function setWidth(width){
	this.width = width;
}

function setHeight(height){
	this.height = height;
}

function getWidth(){
	return width;
}

function getHeight(){
	return height
}

function getFilename(){
	return filename;
}

function draw(){
	// ToDo
}