var rl = require('readline').createInterface(process.stdin, process.stdout);

var funct = function runner(answer){
	if(answer.localeCompare("quit") === 0){
		rl.close();
	} else {
		process_text(answer);
		// console.log(answer);
		prompter();
	}
}

function prompter(){
	rl.question("Enter text: ", funct);
}

function process_text(text){
	var sentences = text.split(/[.?!]+/);
	for(var i = 0; i < sentences.length; i++){
		process_sentence(sentences[i]);
	}
}

function process_sentence(sentence){
	sentence = sentence.trim();
	var words = sentence.split(" ");
}

// Run the program
prompter();



