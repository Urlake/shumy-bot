const Discord = require("discord.js"); // npm i discord

exports.run = async (client, message, args) => {
    let carter = new Discord.RichEmbed()
    let usuario = message.mentions.users.first() || client.users.get(args[0]) || message.author;
    let ft = usuario.avatarURL
    if (ft.endsWith(".gif")) {
    ft = `${usuario.avatarURL}?size=2048`
    }
    carter.setTitle(`:frame_photo: ${usuario.tag}`)
    carter.setImage(ft);
    message.channel.send(carter)
}

module.exports.help = {
    name: "_avatar ?usuário?",
    description: "Mostra a Foto de Perfil de Certa Pessoa"
}