const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let usuario;
    let nick;

    if (message.mentions.users.first()) {
        usuario = message.mentions.users.first();
        nick = args.slice(1).join(" ");
    }
    else {
        usuario = message.author;
        nick = args.slice(0).join(" ");
    }

    if (!message.guild.members.get(message.author.id).hasPermission("CHANGE_NICKNAME", false, true, true)) {
        let embed = new Discord.RichEmbed()
        .setDescription(`Você não tem Permissão para usar este Comando`);
        message.channel.send(embed);
        return 0;
    }

    if (message.mentions.users.first()) {
        if (!message.guild.members.get(message.author.id).hasPermission("MANAGE_NICKNAMES", false, true, true)) {
            let embed = new Discord.RichEmbed()
            .setDescription(`Você não tem Permissão para Alterar o Nickname de Outros Membros`);
            message.channel.send(embed);
            return 0;
        }
    } 

    if (message.mentions.users.first()) {
        if (usuario.id === message.guild.ownerID) {
            message.channel.send("Eu Não Posso Alterar o Nick, pois é o Dono do Server");
            let embed = new Discord.RichEmbed()
            .setDescription(`Eu não Posso Alterar o Nick, pois é o Dono do Server`);
            message.channel.send(embed);
            return 0;
        }  
    }
    else {
        if (message.member.id === message.guild.ownerID) {
            let embed = new Discord.RichEmbed()
            .setDescription(`Eu não Posso Alterar o Nick, pois é o Dono do Server`);
            message.channel.send(embed);
            return 0;
        }  
    }
    
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES", false, true, true)) {
        let embed = new Discord.RichEmbed()
        .setDescription(`Eu não Tenho Permissão para Alterar o seu Nickname`);
        message.channel.send(embed);
        return 0;
    }
    
    message.guild.member(usuario).setNickname(nick);
    let embed = new Discord.RichEmbed()
    .addField(`Nickname Alterado para:`, `\`\`\`\n${nick}\`\`\``);
    message.channel.send(embed);
    //message.channel.send(`Nickname Alterado para ${nick}`);
}

module.exports.help = {
    name: "_changenick ?usuário? !nickname!",
    description: "Muda o Seu Nick de Servidor ou Pode Mudar o Nick dos Outros se Você for um Moderador"
}