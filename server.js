const Discord = require('discord.js');
const five = require('johnny-five');
const client = new Discord.Client();
const board = new five.Board();
board.on("ready", () => {
	const led = new five.Led(2);
	client.on('voiceStateUpdate', (oldState, newState) => { 
		if (oldState.member.user.id !== "youridhere") return // make sure its only checking for your microhpone
		if (newState.mute) { // check if mic is muted
		led.on() //if true make light on
		} else {	
		led.off() //if false make light off
	})
})
})

client.login('YOUR BOT TOKEN HERE'); // https://discordapp.com/developers/applications/
