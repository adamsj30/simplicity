/*
	This class keeps track of information about a spite.
*/

private var x_location;
private var y_location;
private var images;

// Constructor for sprite class
public function sprite(x_location, y_location, image_count){
	this.x_location = x_location;
	this.y_location = y_location;
	images = Array(image_count);
}

public function draw(){
	// ToDo
}

public function getX(){
	return x_location;
}

public function getY(){
	return y_location;
}

public function setX(x){
	x_location = x;
}

public function setY(y){
	y_location = y;
}

public function addImage(filename, image_number, x_location, y_location, width, height){
	if(image_number < images.length){
		images[image_number] = person(filename, x_location, y_location, width, height);
	}
}

public function animate(){
	// ToDO
}