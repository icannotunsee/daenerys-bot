const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

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
    if (msg.content === 'beca') {
      msg.reply('noe');
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
      msg.reply('noe, you.'); 
    }
  });

  client.on('message', msg => {
    if (msg.content === 'stfu') {
      msg.reply('noe, you.');
    }
  });

  client.on('message', msg => {
    if (msg.content === 'eye') {
      msg.reply('eyes are organs of the visual system. They provide animals with vision, the ability to receive and process visual detail, as well as enabling several photo response functions that are independent of vision. Eyes detect light and convert it into electro-chemical impulses in neurons.')
    }
  });
