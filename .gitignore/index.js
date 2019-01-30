const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (".")

bot.on('ready', function() {
    bot.user.setGame(".help :)");
    console.log("Connecté !");
}):

bot.login("NTM5MTA0ODM5MTU0Nzk0NDk2.Dy9wPQ.J6sxEbZ8-LaIdziLigB2totSvPU");


bot.on('message', message => {
    if (message.content === prefix + "help")[
        message.channel.sendMessage("Liste des commandes : \n- .help\n- .ip\n- .by\n- .ping\n- .test\n- .discord \n\nSi vous avez d'autres suggestions, n'hésitez pas à allez voir ! Adam7680 [ F/N ]#3386");
    }

    if (message.content === "Salut"){
        message.reply("Hey ! :)")
        console.log("Salut à était fait x) !");
    }
});
