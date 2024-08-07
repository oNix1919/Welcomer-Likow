const Discord = require('discord.js');

module.exports = {
    name: "New",
    aliases: ["N"],
    description: "New Command",

    async execute(client, message, args, cmd) {

    
        await message.channel.sendTyping();

        if (message.member.roles.cache.has('1175786426932142111')) {

            const embed = new Discord.EmbedBuilder()
                .setColor(`#444444`)
                .setAuthor({
                    name: `╭═━━✥𝐍𝐞𝐰 𝐅𝐨𝐫𝐦 𝐑𝐫𝐞𝐪𝐞𝐬𝐭✥━━═╮`,
                    iconURL: `https://cdn.discordapp.com/icons/1088579724973965312/9d7a47bb946e3a6e3780b823b837a47f.png?size=1024`
                })
                .setDescription(`برای وریفای شدن در ویس ولکام روم منتظر ادمین مربوطه باشید تا شما را به ویس های ویتینگ روم موو دهند`)
                .setImage('https://cdn.discordapp.com/attachments/1088579726899171334/1127664735324741793/IMG_20230709_224650.jpg')
                .setFooter({
                    text: "𝐋𝐈𝐊𝐎𝐖 мαηαgєя",
                    iconURL: `https://cdn.discordapp.com/icons/1088579724973965312/9d7a47bb946e3a6e3780b823b837a47f.png?size=1024`
                });
//========================================
const channel_log_Reject = client.channels.cache.get('1219413841516036187');
const embed_log_Reject = new Discord.EmbedBuilder()
.setDescription(`
**ادمین مربوطه لطفا به ویس های ویتینگ روم بروید
 <#1175786621715624037> / <#1175786622898405388> 🔔**`)
.setColor(`#27ff00`)
channel_log_Reject.send({
    content: (`<@&1175786423635423263>`), 
    embeds: [embed_log_Reject]});
//========================================
           await message.reply({ 
            content: message.author.toString(), 
           embeds: [embed]
         })
       
        }

    },
};               
