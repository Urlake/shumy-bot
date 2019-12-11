const Discord = require("discord.js");

exports.run = (client, message, args) => {

    let user;
    let botmessage;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
        botmessage = args.slice(1).join(' ');
    }
    else {
        user = message.author;
        botmessage = args.slice(0).join(' ');
    }
    
    

    if (!message.guild.me.hasPermission("MANAGE_WEBHOOKS", false, true, true)) {
        message.channel.send("Eu não tenho permissão para criar webhooks!!")
        return 0;
    }
    
    if (args[0] == null) {return message.channel.send(`Coloque alguma mensagem!`)}
    message.channel.createWebhook(user.username, user.avatarURL).then(w => {
    w.send(botmessage);
    })

    message.delete(botmessage);

}

module.exports.help = {
    name: "_fakemsg ?usuário? !mensagem!",
    description: "Me faça Dizer Certa Mensagem por Você ou por Outros"
}