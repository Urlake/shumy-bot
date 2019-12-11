const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if (message.author.id === "589479580822405132") {
        client.user.setActivity(args.slice(0).join(" "));
        let embed = new Discord.RichEmbed()
        .setDescription(`Status alterado com sucesso!!`);
        message.channel.send(embed);
        //message.channel.send(`Status alterado com sucesso!!`);
    }
}

module.exports.help = {
    name: "_changestatus",
    description: "Troca o Status do Bot(Apenas para Desenvolvedor)"
}