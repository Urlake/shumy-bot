const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let msg = await message.channel.send("Calculando...");
    msg.edit("Pronto!!");
    let embed = new Discord.RichEmbed()
    .addField("A Latencia é:", Math.floor(msg.createdAt - message.createdAt), false)
    .addField("A Latencia de API é:", Math.floor(client.ping), false);
    message.channel.send(embed);
}

module.exports.help = {
    name: "Ping",
    description: "pong!!",
    usage: "_ping"
}