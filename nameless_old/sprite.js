/*
	This class keeps track of information about a spite.
*/

var x_location;
var y_location;
var images;

// Constructor for sprite class
function sprite(x_location, y_location, image_count){
	this.x_location = x_location;
	this.y_location = y_location;
	images = Array(image_count);
	return this;
}

function draw(){
	// ToDo
}

function getX(){
	return x_location;
}

function getY(){
	return y_location;
}

function setX(x){
	x_location = x;
}

function setY(y){
	y_location = y;
}

function addImage(filename, image_number, x_location, y_location, width, height){
	if(image_number < images.length){
		images[image_number] = person(filename, x_location, y_location, width, height);
	}
}

function animate(){
	// ToDO
}