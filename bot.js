const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("571120741861556235")
setInterval(function() {
channel.send(`Spamm 2`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
