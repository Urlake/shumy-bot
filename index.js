const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const fs = require("fs");

client.on("ready", () => {
    console.log("Shumy Iniciado com Sucesso!!!");
    client.user.setActivity(`Estou em ${client.guilds.size} Servers!!!`);
});

client.on("guildCreate", guilds => {
    console.log(`Shumy Entrou no Servidor: ${guilds.name}, que Tem ${guilds.members.size} Membros!!`);
    client.user.setActivity(`Estou em ${client.guilds.size} Servers!!!`);
});

client.on("guildDelete", guilds => {
    console.log(`Shumy Saiu do Servidor: ${guilds.name}, que Tinha ${guilds.members.size} Membros!!`);
    client.user.setActivity(`Estou em ${client.guilds.size} Servers!!!`);
});

client.on("message", message => {
    if (message.content.startsWith("Shumy" || "shumy")) message.channel.send("Para me Ativar, use _ Antes dos Comandos!!");
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    try {
        let commands = require(`./commands/${cmd}.js`);
        commands.run(client, message, args);
    } catch (e) {
        //console.log(e);
        message.channel.send("Comando não encontrado!!");
    } finally {}
});

client.login(config.token)