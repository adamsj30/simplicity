// http://gamebanana.com/tuts/11229
/*
	This class is the main engine class. It contains all and does all! All hail the engine!
*/

var includes = ["character.js", "image.js", "npc.js", "object.js", "player.js", "socket.js", "sound.js", "sprite.js"];
var sprites = {};

function engine(){
	// Add include files
	for(var i = 0; i < includes.length; i++)
		loadScript(includes[i]);
	return this;
}

function loadScript(url){
	// Add scrip tag to head
	var head = document.getElementsByTagName("head")[0];
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;

	// Fire the loading
	head.appendChild(script);
}

function addSprite(x_location, y_location, image_count, id, filename, width, height){
	sprites[id] = sprite(x_location, y_location, image_count);
	sprites[id].addImage(filename, 0, x_location, y_location, width, height);
}

function drawSprite(id, image_number){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');

	var img = new Image();
	img.src = sprites[id].images[image_number].getFilename();

	context.drawImage(img,
		sprites[id].images[image_number].getXLocation(),
		sprites[id].images[image_number].getYLocation(),
		sprites[id].images[image_number].getWidth(),
		sprites[id].images[image_number].getHeight(),
		sprites[id].getX(),
		sprites[id].getY(),
		sprites[id].images[image_number].getWidth(),
		sprites[id].images[image_number].getHeight(),
	);
}

engine();
addSprite(0,0,1,"circle", "test_image1.png", 16, 16);
