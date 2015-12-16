import java.util.*;
import java.io.IOException;
/*
	This class is the main engine class. It contains all and does all! All hail the engine!
*/

public class Engine{

	private ArrayList<Sprite> sprites = new ArrayList<Sprite>();
	private boolean log_to_console;
	private Window window;
	private int refresh_rate;

	public Engine(String window_name, int x_location, int y_location, int width, int height){
		// Create game window
		window = new Window(window_name, x_location, y_location, width, height);
	}

	public void AddSprite(int x_location, int y_location, int image_count, int render_order, int id, String filename, int width, int height){
		sprites.add( new Sprite(x_location, y_location, image_count, render_order, filename) );
		sprites.get(id).AddImage(0, x_location, y_location, width, height);
	}

	public void AnimateSprite(int sprite_id){
		window.AnimateSprite(sprites.get(sprite_id));
	}

	public static void main(String[] args){
		Engine e1 = new Engine("Engine Tester", 10, 10, 800, 800);
		e1.AddSprite(0, 0, 1, 0, 0, "C:/Users/Josh/Documents/GitHub/simplicity/nameless/test_image1.png", 20, 20);
		e1.AnimateSprite(0);
	}

}