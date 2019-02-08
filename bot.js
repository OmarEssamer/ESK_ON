const Discord = require("discord.js");
const client = new Discord.Client();

A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
 لو سمحت ممكن تدخل سيرفرى الجديد 
                               [https://discord.gg/hXv8Xv3]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
