const Discord = require('discord.js');
const DiscordVoice = require('@discordjs/voice');

module.exports = async (client) => {

    console.log(`${client.user.tag} is online now!`);

    const voiceChannel = client.channels.cache.get("1257033544098648184");

    await client.user.setPresence({
        activities:
            [
                {
                    name: `${voiceChannel.guild.memberCount} Members`,
                    type: Discord.ActivityType.Watching
                }
            ],
        status: 'online'
    });

    DiscordVoice.joinVoiceChannel({
        channelId: voiceChannel.id,
        guildId: voiceChannel.guild.id,
        selfDeaf: false,
        selfMute: false,
        adapterCreator: voiceChannel.guild.voiceAdapterCreator
    });

    setInterval(async () => {

        await client.user.setPresence({
            activities:
                [
                    {
                        name: `${voiceChannel.guild.memberCount} Members`,
                        type: Discord.ActivityType.Watching
                    }
                ],
            status: 'dnd'
        });

        DiscordVoice.joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: voiceChannel.guild.id,
            selfDeaf: true,
            selfMute: false,
            adapterCreator: voiceChannel.guild.voiceAdapterCreator
        });


    }, 1 * 60 * 60 * 1000);

};