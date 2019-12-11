const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");

exports.run = (client, message, args) => {
    let g_avatar = message.guild.iconURL;
    let embed = new Discord.RichEmbed()

    .setTimestamp()
    .setTitle(`${message.guild.name}`)
    .setThumbnail(g_avatar)
    .setDescription(`Algumas Informações do ${message.guild.name}`)
    .addField(`Criador do Server:`, message.guild.owner, true)
    .addField(`Id do Servidor:`, message.guild.id, true)
    .addField(`Região do Servidor:`, message.guild.region, true)
    .addField(`Servidor Criado em:`, moment(message.guild.createdAt).format("LLLLL"))
    .addField(`Total de Membros:`, message.guild.members.size, true)
    .addField(`Eu Entrei neste Servidor em:`, moment(client.user.joinedAt).format("LLLLLLL"))
    .addField(`Você Entrou neste Servidor em:`, moment(message.member.joinedAt).format("LLLLLL"));

    message.channel.send(embed);
}

module.exports.help = {
    name: "_serverinfo",
    description: "Te Mostra Algumas Informações Sobre o Atual Servidor"
}