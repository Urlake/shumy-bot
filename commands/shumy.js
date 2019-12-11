const Discord = require("discord.js"); // npm i discord

exports.run = async (client, message, args) => {
    //if (message.content.includes("istrek" || "strek" || "istrek9" || "@istrek9" || "@istrek" || "@strek") && message.content.includes("gay" || "guei" || "viado")) message.channel.send("Claro!! Istrek é o Maior Gay que eu já vi na Vida");
    message.channel.send(doMagic8BallVoodoo())
}

module.exports.help = {
    name: "_shumy !pergunta!",
    description: "Pergunte algo pro Shumy que ele irá te Responder"
}

function doMagic8BallVoodoo() {
    var rand = ['Sim', 'Não', 'Não Sei', 'Nunca!!', 'Claro!!', 'Não Faço Ideia...', 'Provavelmente Sim', 'Provavelmente Não'];

    return rand[Math.floor(Math.random()*rand.length)];
}