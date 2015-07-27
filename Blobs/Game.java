import java.applet.Applet;
import java.awt.Graphics;

public class Game extends Applet{
	
	private int game_state;
	final int START_MENU = 0;
	final int GAME_RUNNING = 1;
	final int GAME_PAUSED = 2;

	public Game(){

	}

	public Game(int game_state){
		this.game_state = game_state;
	}

	private void change_state(int to_state){
		// Insert check to make sure that state is acceptable
		game_state = to_state;
	}

	public void paint(Graphics g){
		g.drawString("Hello world!", 100, 100);
	}
}