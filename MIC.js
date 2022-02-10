const Discord = require('discord.js');
const five = require('johnny-five');
const client = new Discord.Client();
const board = new five.Board({
  port: "COM13" //change to your arduino com port
});
board.on("ready", () => {
	const led = new five.Led(2);
	client.on('voiceStateUpdate', (oldState, newState) => { 
		if (oldState.user.id !== "your discord id here") return // make sure its only checking for your (id) icrohpone
		if (newState.mute) { // check if mic is muted
		//console.log(oldState.user.tag);//this string is debug to check if it check your id correctly
		led.on() //if true make light on
		} else {	
		led.off() //if false make light off
	}
});
});

client.login('bot id here');
