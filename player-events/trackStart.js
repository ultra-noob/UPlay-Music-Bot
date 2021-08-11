module.exports = (client, message, track) => {
      message.channel.send({
        embed: {
          color: "00d9ff",
            description: `${client.emotes.naa} | Now playing ${track.title} into ${message.member.voice.channel.name} will Now play.`,
            footer: { text: `©®eated by Nikhil | Requested by ${message.author.username}` },
        },
    });
};
