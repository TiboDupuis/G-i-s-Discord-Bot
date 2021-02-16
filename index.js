const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({
	disableEveryone: true
});
var gis = require('g-i-s');
var URL;

bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);
	bot.user.setActivity("Searching images on the web!");
});

bot.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let argument = messageArray.slice(1);

	if (command === `${prefix}find` && messageArray.length > 1 && messageArray.length < 3) {
		argument = argument.toString();
		gis(argument, logResults);
	}

	function logResults(error, results) {
		if (error) {
			console.log(error);
		} else {
			console.log('\033[0m', JSON.stringify(results, null, '  '));
			URL = results;
			sendMessage();
		}
	}

	function sendMessage() {
		return message.channel.send("@" + message.member.user.tag + ", here is the image I found for " + argument + ": " + URL);
	}
});

bot.login(botconfig.token);