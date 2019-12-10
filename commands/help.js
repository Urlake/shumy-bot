const fs = require("fs");
const Discord = require("discord.js");

module.exports.run = async(bot, message, args, con) => {
    fs.readdir("./commands/", (err, files) => {
        if(err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <= 0) {
            console.log("No commands to load!");
            return;
        }

        let embed = new Discord.RichEmbed();

        let result = jsfiles.forEach((f, i) => {
            let props = require(`./${f}`);
            let filesArray = [props.help.name, props.help.description, props.help.usage]
            
            embed.addField(`**${filesArray[0]}:**`, `Descrição: ${filesArray[1]} \nExemplo: ${filesArray[2]}`);
            
            //message.author.send(`**${filesArray[0]}** \n${filesArray[1]} \n${filesArray[2]}`);
        });
        message.channel.send(embed);

    });
}

module.exports.help = {
    name: "Help",
    description: "Quer Saber os meus Comandos? Então é isso que Deve Usar!!",
    usage: "_help"
}