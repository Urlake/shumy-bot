const Discord = require("discord.js");

exports.run = (client, message, args, commands) => {
    if (message.author.id === "589479580822405132") {
        try {
        let argumentos = args.slice(0).join(" ");
        if(!args.join(' ')) return message.reply('Burro')
        let código = eval(argumentos);
       
        if (typeof código !== 'string')
        código = require('util').inspect(código, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .addField('Entrada', `\`\`\`js\n${argumentos}\`\`\``)
        .addField('Saída', `\`\`\`js\n${código}\n\`\`\``)
        message.channel.send(embed)
        } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
        }
    }
}

module.exports.help = {
    name: "_eval !comando!",
    description: "Eval!!(Apenas para Desenvolvedor)"
}