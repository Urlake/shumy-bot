const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    message.channel.send(`Oi!!`);
}

module.exports.help = {
    name: "Oi",
    description: "Oi!!",
    usage: "_oi"
}