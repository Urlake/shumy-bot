const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.channel.send(`Oi!!`);
}

module.exports.help = {
    name: "_oi",
    description: "Fale um Oi para Mim :)"
}