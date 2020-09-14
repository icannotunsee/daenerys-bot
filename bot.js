const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('Game of Thrones', { type: 'STREAMING' });
});


client.on('message', msg => {
    if (msg.content === 'nigger') {
      msg.reply('please do not use derogatory words.');
      msg.delete()
    }
  });

  client.on('message', msg => {
    if (msg.content === 'fag') {
      msg.reply('please do not use derogatory words.');
      msg.delete()
    }
  });

  client.on('message', msg => {
    if (msg.content === 'daenerys') {
      msg.reply('yes?');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'nigga') {
      msg.reply('please do not use derogatory words.');
      msg.delete()
    }
  });

  client.on('message', msg => {
    if (msg.content === 'retard') {
      msg.reply('please do not use derogatory words.');
      msg.delete()
    }
  });

  client.on('message', msg => {
    if (msg.content === 'retarded') {
      msg.reply('please do not use derogatory words.');
      msg.delete()
    }
  });

  client.on('message', msg => {
    if (msg.content === 'shut up') {
      msg.reply('no, you.'); 
    }
  });

  client.on('message', msg => {
    if (msg.content === 'stfu') {
      msg.reply('no, you.');
    }
  });

  client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('d!say') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
        message.delete()
        var saytext = args.join(" ");
        message.channel.send(saytext);
    }
  });


  client.login(process.env.BOT_TOKEN);
