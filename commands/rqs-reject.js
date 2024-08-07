const Discord = require('discord.js');

module.exports = {
    name: "Req",
    aliases: ["R"],
    description: "Reject Command",

    async execute(client, message, args, cmd) {

    
        await message.channel.sendTyping();

       {

            const embed = new Discord.EmbedBuilder()
                .setColor(`#ff0000`)
                .setAuthor({
                    name: `╭═━━✥𝐑𝐞𝐣𝐞𝐜𝐭 𝐑𝐞𝐪𝐞𝐬𝐭✥━━═╮`,
                    iconURL: `https://s8.uupload.ir/files/—pngtree—reject_icon_cartoon_vector_5463425_umz8.png`
                })
                .setDescription(`برای ارتباط با ادمین مربوطه  در ویس ریجکتد روم منتظر ادمین مربوطه باشید تا به مشکل شما رسیدگی شود.
                 با تشکر از شکیبایی شما`)
                 .setImage(`https://cdn.discordapp.com/attachments/1088579726899171334/1127664735324741793/IMG_20230709_224650.jpg`)
                .setFooter({
                    text: "𝐋𝐈𝐊𝐎𝐖 мαηαgєя",
                    iconURL: `https://images-ext-2.discordapp.net/external/bqop5TOZSeyfcVKVzU3SoXWayLwvSuKidoyap6JWOLQ/%3Fsize%3D1024/https/cdn.discordapp.com/icons/1088579724973965312/9d7a47bb946e3a6e3780b823b837a47f.png`
                });
//========================================
const channel_req = client.channels.cache.get('1088579727385690217');
const embed_req = new Discord.EmbedBuilder()
.setDescription(`
**🔔 ادمین مربوطه لطفا روی ویس ریجکت رو برید**
<#1123707970329518110>`)
.setColor(`#ff0000`)
channel_req.send({
    content: (`<@&1088579725477302321> / <@&1088579725540196423> / <@&1107708742377685092>`), 
    embeds: [embed_req]});
//========================================
           await message.reply({ 
            content: message.author.toString(), 
           embeds: [embed]
         })
       
        }

    },
};               
