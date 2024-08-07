const Discord = require('discord.js');

module.exports = {
    name: "Form",
    aliases: ["F"],
    description: "Form Command",

    async execute(client, message, args, cmd) {

        await message.delete().catch(() => null);
        await message.channel.sendTyping();

        if (message.member.roles.cache.has('1175786357344440390')) {

            const embed = new Discord.EmbedBuilder()
                .setColor('#747474')
                .setAuthor({
                    name: '╭═━━✥𝐁𝐢𝐨 𝐅𝐨𝐫𝐦✥━━═╮',
                    iconURL: 'https://cdn.discordapp.com/attachments/1175786658365452359/1208041910317486120/Picsart_24-02-16_16-16-06-339.jpg?ex=6606c1b3&is=65f44cb3&hm=e687d5123630308653c4462655488697f69d92e4c8ec2ceaa6d32634400c5224&'
                    
                })
                .setThumbnail('https://cdn.discordapp.com/attachments/1175786658365452359/1208041910317486120/Picsart_24-02-16_16-16-06-339.jpg?ex=6606c1b3&is=65f44cb3&hm=e687d5123630308653c4462655488697f69d92e4c8ec2ceaa6d32634400c5224&')
                .setImage('https://media.discordapp.net/attachments/784122876876947526/994541930165833748/668a8cccacc792924fa588b4adca8f68.gif')
                .setDescription(`**> 1- تبلیغ در سرور و پیوی ممبر های این سرور ممنوع است و در صورت مشاهده فرد بن خواهد شد
                > 
                > 2- ارسال مطالب سیاسی - نژاد پرستانه و پورنوگرافی ممنوع است و در صورت مشاهده فرد 1 روز میوت میشود
                > 
                > 3- هرگونه فحاشی رکیک ممنوع است و در صورت مشاهده فرد بن خواهد شد
                > 
                > 4- گذاشتن نیک نیم نامناسب برای اکانت خود ممنوع است، در صورت بی توجهی به اخطار فرد بن خواهد شد
                > 
                > 5-  در نهایت ذکر شود قوانین برا همه یکسان است چه قدیمی ترین عضو سرور و چه ممبری که به تازگی عضو شده باشد**`)
                .setFooter({
                    text: '◉ 𝐁𝐢𝐨 𝐅𝐨𝐫𝐦',
                    iconURL: 'https://cdn.discordapp.com/attachments/1175786658365452359/1208041910317486120/Picsart_24-02-16_16-16-06-339.jpg?ex=6606c1b3&is=65f44cb3&hm=e687d5123630308653c4462655488697f69d92e4c8ec2ceaa6d32634400c5224&'
                });

            const button = new Discord.ButtonBuilder()
                .setCustomId('verification-button')
                .setStyle(Discord.ButtonStyle.Primary)
                .setLabel('Bio');

                const button1 = new Discord.ButtonBuilder()
                .setLabel('Support Develpper Server')
                .setURL('https://discord.gg/unPKfuu5PB')
                .setStyle(Discord.ButtonStyle.Link);


                const row = new Discord.ActionRowBuilder()
                .addComponents([button, button1]);

            await message.channel.send({
                embeds: [embed],
                components: [row]
            });

        };

    },

};