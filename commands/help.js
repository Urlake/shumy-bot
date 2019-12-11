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
        embed.setDescription(`Se um Argumento está Entre !! Significa que é Nescessário Usa-lo \nSe um Argumento está Entre ?? Significa que não é Nescessário Usa-lo`);

        let result = jsfiles.forEach((f, i) => {
            let props = require(`./${f}`);
            let filesArray = [props.help.name, props.help.description]
            
            embed.addField(`**${filesArray[0]}:**`, `${filesArray[1]}`);
            
            //message.author.send(`**${filesArray[0]}** \n${filesArray[1]} \n${filesArray[2]}`);
        });
        message.channel.send(embed);

    });
}

module.exports.help = {
    name: "_help",
    description: "Mostra todos os Meus Comandos e como Usa-los"
}