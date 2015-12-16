/*
	This class contains information about an image.
*/

public class Image{

	private int x_location, y_location, width, height;

	public Image(int x_location, int y_location, int width, int height){
		this.x_location = x_location;
		this.y_location = y_location;
		this.width = width;
		this.height = height;
	}

	public void SetX(int x_location){
		this.x_location = x_location;
	}

	public void SetY(int y_location){
		this.y_location = y_location;
	}

	public void SetWidth(int width){
		this.width = width;
	}

	public void SetHeight(int height){
		this.height = height;
	}

	public int GetX(){
		return x_location;
	}

	public int GetY(){
		return y_location;
	}

	public int GetWidth(){
		return width;
	}

	public int GetHeight(){
		return height;
	}

}