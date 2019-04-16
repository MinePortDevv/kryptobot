const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "*"
const red = "0xff0000"
const blue = "0x0046ff"
const green = "0x0fff00"
const white = "0xffffff"
const black = "0x000000"

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} en ligne.`);
  client.user.setActivity(`Surveille Kryptonium !`);
});

client.on('message', async msg => {
  if(msg.content == prefix + "ping"){

var useruser = `Commande executez par: ${msg.author.username}`
var userurl = msg.author.avatarURL;
var user = msg.mentions.users.first();
var member = msg.guild.member(user);

    let pingEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`Chargement...`)
        .setTimestamp()
    msg.channel.send(pingEmbed).then(msg =>{
        pingEmbed.setColor("RANDOM")
        pingEmbed.setDescription(`:ping_pong: Pong ! **\`${client.pings[0]}ms\`** :ping_pong:`)
        pingEmbed.setFooter(useruser, userurl)
        pingEmbed.setTimestamp()
        msg.edit(pingEmbed) 
    })
  }

  if (msg.content.startsWith(prefix + 'kick')) {
var permkick = msg.member.hasPermission("KICK_MEMBERS")
    if(!permkick) return;
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          msg.reply(`Vous avez kick **${user.tag}** avec succès :white_check_mark: !`);
        }).catch(err => {
          msg.reply('Je n\'ai pas la permission assez haute pour kick cette utilisateur !');
          console.error(err);
        });
      } else {
        msg.channel.send('Cet utilisateur n\'est pas dans ce serveur !');
      }
    } else {
      msg.channel.send('Vous devez mentionnez l\'utilisateur à kick !');
    }
  }
  
  if (!msg.guild) return;
  const helpEmbed = new Discord.RichEmbed()
	.setColor('RANDOM')
	.setTitle('Page d\'aide')
	.setDescription('Ceci est la page d\'aide.')
	.setThumbnail('https://i.imgur.com/xrgsfzJ.png')
	.addBlankField()
	.addField(prefix + 'help', 'Vous affiche cette page d\'aide', true)
	.addField(prefix + 'ping', 'Affiche la latence du bot.', true)
  .addField(prefix + 'ban', 'Bannir un utilisateur.', true)
  .addField(prefix + 'kick', 'Kick un utilisateur.', true)
  .addField(prefix + 'mp', 'Envoyez un message à tout le serveur.', true)
  .addField(prefix + 'ip', 'Affiche l\'IP & Port.', true)
  .addField(prefix + 'say', 'Répète le message suivi.', true)
  .addField(prefix + 'automp', 'Vous envoie en privé le message privé.', true)
	.setTimestamp()
	.setFooter('Krypto\'Bot by Adam7680 • Illimity#3386', 'https://i.imgur.com/xrgsfzJ.png');
  if (msg.content === prefix + 'help') {
    msg.channel.send(helpEmbed);
      }
  const ipEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('IP & Port')
  .setDescription('IP & Port de Kryptonium :')
  .setThumbnail('https://i.imgur.com/xrgsfzJ.png')
  .addBlankField()
	.addField('IP :', 'srv2.secure-heberg.com', true)
  .addField('Port :', '10097', true)
  .setTimestamp()
  .setFooter('Krypto\'Bot by Adam7680 • Illimity#3386', 'https://i.imgur.com/xrgsfzJ.png');
  if (msg.content === prefix + 'ip') {
    msg.channel.send(ipEmbed);
  }
  const nopermEmbed = new Discord.RichEmbed()
  .setColor(red)
  .setTitle(':x:')
  .setDescription('Vous n\'avez pas la permission d\'effectuez cette commande.')
  .setThumbnail('https://i.imgur.com/xrgsfzJ.png')
  .addBlankField()
  .setFooter('Krypto\'Bot by Adam7680 • Illimity#3386', 'https://i.imgur.com/xrgsfzJ.png');

  var saytext = msg.content.split(' ').slice(1).join(' ')
  var useruser = `${msg.author.username}`
  const sayEmbed = new Discord.RichEmbed()
  .setColor('0x585858')
  .setTitle('Say:')
  .setDescription(saytext)
  .setTimestamp()
  .setFooter(useruser)

  if(msg.content.startsWith (prefix + 'say')) {
      var text = msg.content.split(' ').slice(1).join(' ')
      if(!text) return msg.reply('Veuillez spécifié votre message !')
      msg.channel.send(sayEmbed)
      msg.delete()  
  }

  if(msg.content.startsWith (prefix + 'automp')) {
    var automptext = msg.content.split(' ').slice(1).join(' ')
    if(!automptext) return msg.reply('Veuillez spécifié votre message !')
    msg.author.send('Némélia AutoMP > ' + automptext)
    msg.delete()
  }
  if (msg.content.startsWith(prefix + 'ban')) {
    const user = msg.mentions.users.first();
    var permban = msg.member.hasPermission("BAN_MEMBERS")
    if(!permban) return;
    if (user) {
      const member = msg.guild.member(user);
      if (member) {
        member.ban({
          reason: 'Banni par Krypto\'Bot !'
        }).then(() => {
          msg.reply(`Vous avez bien banni ${user.tag} !`);
        }).catch(err => {
          msg.reply('Je n\'ai pas la permission de bannir ce membre !');
          console.error(err);
        });
      } else {
        msg.reply('Cette utilisateur ne se trouve pas sur ce serveur !');
      }
    } else {
      msg.reply('Vous devez mentionnez un utilisateur pour le ban !');
    }
  }

  if(msg.content.startsWith(prefix + 'mp')) {
  msg.guild.members.forEach(member => {
    var mptext = msg.content.split(' ').slice(1).join(' ')
    if(!mptext) return;
    var perm = msg.member.hasPermission("ADMINISTRATOR")
    if(!perm) return;
  member.send(mptext)

})

  }
});

client.login(process.env.TOKEN);
