using System;
using System.IO;
using System.Collections.Generic;

public class FarmingCalculator{
	
	// Wood Trees
	private const double OAK = 481.13;
	private const double WILLOW = 1481.5;
	private const double MAPLE = 3448.4;
	private const double YEW = 7160.9;
	private const double MAGIC = 13914.8;
	// Fruit Trees
	private const double APPLE = 1272.5;
	private const double BANANA = 1841.5;
	private const double ORANGE = 2586.7;
	private const double CURRY = 3036.9;
	private const double PINEAPPLE = 4791.7;
	private const double PAPAYA = 6380.4;
	private const double PALM = 10509.6;
	// Misc. trees
	private const double CALQUAT = 12516.5;

	// Wood Payments
	private const int OAK_PAY = 1; // Tomatoes
	private const int WILLOW_PAY = 1; // Apples
	private const int MAPLE_PAY = 1; // Oranges
	private const int YEW_PAY = 10; // Cactus Spines
	private const int MAGIC_PAY = 25; // Coconut
	// Fruit Payments
	private const int APPLE_PAY = 9; // Sweetcorn
	private const int BANANA_PAY = 4; // Apples
	private const int ORANGE_PAY = 3; // Strawberries
	private const int CURRY_PAY = 5; // Bananas
	private const int PINEAPPLE_PAY = 10; // Watermelons
	private const int PAPAYA_PAY = 10; // Pineapple
	private const int PALM_PAY = 15; // Papaya
	// Misc. Payments
	private const int CALQUAT_PAY = 8; // Poison Ivy Berries

	// Tree counts
	private int oak_count, willow_count, maple_count, yew_count, magic_count;
	private int apple_count, banana_count, orange_count, curry_count, pineapple_count, papaya_count, palm_count;
	private int calquat_count;
	// Payment counts
	private int oak_pc, willow_pc, maple_pc, yew_pc, magic_pc;
	private int apple_pc, banana_pc, orange_pc, curry_pc, pineapple_pc, papaya_pc, palm_pc;
	private int calquat_pc;
	// Variables
	private bool using_payments;
	private int current_xp;
	private int goal_xp;


	public FarmingCalculator(){
		tree_count = new List<KeyValuePair<string, int>>();
	}

	public FarmingCalculator(List<KeyValuePair<string, int>> trees, bool using_payments, int current_xp, int goal_xp){
		foreach(var tree in trees){
			switch(tree.Key){
				case "oak":
					oak_count = tree.Value;
					break;
				case "willow":
					willow_count = tree.Value;
					break;
				case "maple":
					maple_count = tree.Value;
					break;
				case "yew":
					yew_count = tree.Value;
					break;
				case "magic":
					magic_count = tree.Value;
					break;
				case "apple":
					apple_count = tree.Value;
					break;
				case "banana":
					banana_count = tree.Value;
					break;
				case "orange":
					orange_count = tree.Value;
					break;
				case "curry":
					curry_count = tree.Value;
					break;
				case "pineapple":
					pineapple_count = tree.Value;
					break;
				case "papaya":
					papaya_count = tree.Value;
					break;
				case "palm":
					palm_count = tree.Value;
					break;
				case "calquat":
					calquat_count = tree.Value;
					break;
			}
		}
		this.using_payments = using_payments;
		this.current_xp = current_xp;
		this.goal_xp = goal_xp;
	}

	private void CalculatePayments(){

	}

	public static void Main(string[] args){
		
	}

}