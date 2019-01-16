const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
token= NTMzMTU4NjEyNDAzNDg2NzIx.DyEkkA.pGWLL00ogt2jQKu59DfzhcPATHQ
owner= 490320866391883788
prefix= A
game= Ahelp
stayinchannel=true
songinstatus=true
client.login(process.env.BOT_TOKEN);
