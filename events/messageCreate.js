const Discord = require('discord.js');
const config = require('../config.json');

module.exports = async (client, message) => {

  if (message.channel.type === Discord.ChannelType.DM || message.system || message.author.bot) return;

  const prefix = config.Prefix;

  if (message.content.toLowerCase().startsWith(prefix)) {

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));
    if (command) command.execute(client, message, args, cmd).catch((error) => console.log(error))
    
  };

  

};