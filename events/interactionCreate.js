const Discord = require('discord.js');

module.exports = async (client, interaction) => {

    if (interaction.isButton()) {

        if (interaction.customId === 'verification-button') {

            const modalTextInput1 = new Discord.TextInputBuilder()
                .setCustomId('verification-input1')
                .setLabel('اسم')
                .setStyle(Discord.TextInputStyle.Short)
                .setMinLength(2)
                .setMaxLength(20)
                .setPlaceholder('اسم واقعی خود را وارد کنید')
                .setRequired(true);

            const modalTextInput2 = new Discord.TextInputBuilder()
                .setCustomId('verification-input2')
                .setLabel('شهر')
                .setStyle(Discord.TextInputStyle.Short)
                .setMinLength(2)
                .setMaxLength(400)
                .setPlaceholder('شهر خود را بنویسید')
                .setRequired(true);

            const modalTextInput3 = new Discord.TextInputBuilder()
                .setCustomId('verification-input3')
                .setLabel('سن')
                .setStyle(Discord.TextInputStyle.Short)
                .setMinLength(2)
                .setMaxLength(400)
                .setPlaceholder('سن خود را وارد کنید')
                .setRequired(true);

            const modalTextInput4 = new Discord.TextInputBuilder()
                .setCustomId('verification-input4')
                .setLabel('اینوایت')
                .setStyle(Discord.TextInputStyle.Short)
                .setMinLength(2)
                .setMaxLength(400)
                .setPlaceholder('از چه کسی اینوایت گرفتید')
                .setRequired(true);

            const modalRow1 = new Discord.ActionRowBuilder()
                .addComponents([modalTextInput1]);

            const modalRow2 = new Discord.ActionRowBuilder()
                .addComponents([modalTextInput2]);

            const modalRow3 = new Discord.ActionRowBuilder()
                .addComponents([modalTextInput3]);

            const modalRow4 = new Discord.ActionRowBuilder()
                .addComponents([modalTextInput4]);

            const modal = new Discord.ModalBuilder()
                .setCustomId('verification-modal')
                .setTitle('BIO FORM  | Blood Thirsty')
                .addComponents([
                    modalRow1,
                    modalRow2,
                    modalRow3,
                    modalRow4
                ]);

            return await interaction.showModal(modal);

        } else if (interaction.customId.startsWith('boy')) {
            
            if (interaction.member.roles.cache.has('1175786423635423263')) { //id role member or not verify

                const memberId = interaction.customId.split('-')[1];
                const member = interaction.guild.members.cache.get(memberId);

                if (member) {

                    await interaction.reply({ content: `✅ Verified By <@${interaction.member.id}>  !` });

                    await member.roles.add(['1175786427829727234', '1175786469651124257']); // add role member va boy 
                    await member.roles.remove(['1175786426932142111', '1175786469001003019']); // remove role lady va not verify
//========================================
const channel_log_Reject = client.channels.cache.get('1219413742056636577');
const embed_log_Reject = new Discord.EmbedBuilder()
.setDescription(`( ${member} ) was verify by  ( <@${interaction.member.id}> )`)
.setColor(`#85c8f8`)
channel_log_Reject.send({
    content: (`  `), 
    embeds: [embed_log_Reject]});
//========================================
                    const replies = ['Welcome ghashngm'];
                    const answer = Math.floor((Math.random() * replies.length));

                    const channel = client.channels.cache.get('1175786712065126420');
                    await channel.send({ content: `${member} **${replies[answer]}**` });

                } else await interaction.reply({ content: `I cant find any member with this information` });

            } else await interaction.reply({ content: `You Dont Have Permission`, ephemeral: true });

        } else if (interaction.customId.startsWith('girl')) {

            if (interaction.member.roles.cache.has('1175786423635423263')) { //id role member 

                const memberId = interaction.customId.split('-')[1];
                const member = interaction.guild.members.cache.get(memberId);

                if (member) {

                    await interaction.reply({ content: `✅ Verified By <@${interaction.member.id}>  !` });
                    await member.roles.add(['1175786469001003019', '1175786427829727234']);
                    await member.roles.remove(['1175786469651124257', '1175786426932142111']);
//========================================
const channel_log_Reject = client.channels.cache.get('1219413742056636577');
const embed_log_Reject = new Discord.EmbedBuilder()
.setDescription(`( ${member} ) was verify by ( <@${interaction.member.id}> )`)
.setColor(`#f48cff`)
channel_log_Reject.send({
    content: (`  `), 
    embeds: [embed_log_Reject]});
//========================================
                    const replies = ['Welcome ghashngm'];
                    const answer = Math.floor((Math.random() * replies.length));

                    const channel = client.channels.cache.get('1175786712065126420');
                    await channel.send({ content: `${member} **${replies[answer]}**` });

                } else await interaction.reply({ content: `I cant find any member with this information` });

            } else await interaction.reply({ content: `You Dont Have Permission`, ephemeral: true });


        } else if (interaction.customId.startsWith('reject')) {

            if (interaction.member.roles.cache.has('1175786423635423263')) {  //id role member 

               

                
                const memberId = interaction.customId.split('-')[1];
                const member = interaction.guild.members.cache.get(memberId);
                if (member) {
                    await member.roles.add("1175786390450086019")
                    await member.roles.remove(['1175786427829727234', '1175786426932142111', '1175786469651124257', '1175786469001003019']);
                    //========================================
                    const channel_log_Reject = client.channels.cache.get('1219413742056636577');
                    const embed_log_Reject = new Discord.EmbedBuilder()
                    .setDescription(`( ${member} ) was No verify & Reject by ( <@${interaction.member.id}> )`)
                    .setColor(`#ff0000`)
                    channel_log_Reject.send({
                        content: (`  `), 
                        embeds: [embed_log_Reject]});
                    //========================================
                    await interaction.reply({ content: `${member} Reject By <@${interaction.member.id}> !` })

                } else await interaction.reply({ content: `I cant find any member with this information` });

            } else await interaction.reply({ content: `You Dont Have Permission`, ephemeral: true });

        };

    } else if (interaction.isModalSubmit()) {

        
            if (interaction.customId === 'verification-modal') {
                await interaction.deferReply({ ephemeral: true });
            const textInputValue1 = interaction.fields.getTextInputValue('verification-input1');
            const textInputValue2 = interaction.fields.getTextInputValue('verification-input2');
            const textInputValue3 = interaction.fields.getTextInputValue('verification-input3');
            const textInputValue4 = interaction.fields.getTextInputValue('verification-input4');

            await interaction.member.roles.add("1175786426932142111");

            await interaction.followUp({
                content: `✅ Form Submited`,
                ephemeral: true
            });

            const button1 = new Discord.ButtonBuilder()
                .setCustomId(`boy-${interaction.member.id}`)
   //             .setEmoji('')
                .setLabel('Boy')
                .setStyle(Discord.ButtonStyle.Success);

            const button2 = new Discord.ButtonBuilder()
                .setCustomId(`girl-${interaction.member.id}`)
//                .setEmoji('')
                .setLabel('Girl')
                .setStyle(Discord.ButtonStyle.Success);

            const button3 = new Discord.ButtonBuilder()
                .setCustomId(`reject-${interaction.member.id}`)
                .setEmoji('❌')
                .setLabel('Reject')
                .setStyle(Discord.ButtonStyle.Danger);

                const row = new Discord.ActionRowBuilder()
                .addComponents([
                    button1,
                    button2,
                    button3
                ]);

               
            const embed = new Discord.EmbedBuilder()
                .setAuthor({
                    name: `╭═━━✥𝐁𝐢𝐨 𝐅𝐨𝐫𝐦✥━━═╮`,
                })
                .setTitle(`New form: ${textInputValue1}`)
                .setDescription(`> Esm: ${textInputValue1}\n> shahr: ${textInputValue2}\n> sen: ${textInputValue3}\n> invite knnde: ${textInputValue4}\n> **Form By**\n> ${interaction.member}`)
                .setThumbnail(interaction.member.displayAvatarURL({ size: 1024 }));
                

            const channel = client.channels.cache.get('1219413812931723324');

            await channel.send({
                content: interaction.member.toString(), 
                embeds: [embed],
                components: [row]
            });

        };

    };

};
//=========================================================================================================


    

        