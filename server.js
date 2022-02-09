const Discord = require('discord.js');
const five = require('johnny-five');
const client = new Discord.Client();
const board = new five.Board();
board.on("ready", () => {
	const led = new five.Led(13);
	client.on('message', msg => { 
		if (msg.content === "led on") led.on()
		else if (msg.content === "led off") led.off()
	});
});
//this part is for mic state led
//client.on('voiceStateUpdate', (oldState, newState) => {
//  if (oldState.member.user.id !== "youridhere") return // make sure its only checking for your microhpone
//  if (newState.mute) { // check if mic is muted
//    setLightColor("red") //if true make light red
//  } else {
//    setLightColor("green") //if false make light green
//  }
//})

client.login('YOUR BOT TOKEN HERE'); // https://discordapp.com/developers/applications/
