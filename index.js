const Discord = require('discord.js');
const fs = require('node:fs');
const config = require('./config.json')
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent
    ],
    allowedMentions: {
      parse: [
        "roles",
        "users", 
        "everyone"
      ],//mentions disable
      repliedUser: false,//disable mention in replying messages
    },
    ws:{
        properties: {
            browser: "Discord Android",//Discord Web | Discord Android | Discord Ios | Discord Client
            os: "Android"//Other | Android | iOS | TempleOS | Linux | Mac OS X | Windows
        },
    },
    
});

client.commands = new Discord.Collection();
const commands = fs.readdirSync(`./commands/`).filter(files => files.endsWith('.js'));
for (const file of commands) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name.toLowerCase(), command);
    delete require.cache[require.resolve(`./commands//${file}`)];
};

console.log(`Loading Events`);
const events = fs.readdirSync(`./events/`).filter(file => file.endsWith('.js'));
for (const file of events) {
    const event = require(`./events/${file}`);
    client.on(file.split('.')[0], event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
};

process.on('unhandledRejection', (reason, p) => {
    console.log('[antiCrash] :: Unhandled Rejection/Catch');
    console.log(reason?.stack, p);
});

process.on("uncaughtException", (err, origin) => {
    console.log('[antiCrash] :: Uncaught Exception/Catch');
    console.log(err?.stack, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('[antiCrash] :: Uncaught Exception/Catch (MONITOR)');
    console.log(err?.stack, origin);
});
//================================Ping
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === 'ping') {
      const ping = Math.round(interaction.client.ws.ping);
      await interaction.reply(`🏓 پینگ: ${ping} میلی‌ثانیه`);
    }
  });

   

client.login(config.Token)