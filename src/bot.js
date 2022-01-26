// Require the necessary discord.js classes
const {Client, Collection, Intents} = require('discord.js');
const {clientId, guildId, token} = require('../config.json');
const {loadCommands} = require('./core/loader/index');

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});
client.commands = new Collection();

// load commands
loadCommands(client, token, clientId, guildId);

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;


  try {
    await command.execute(client, interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
});

// Login to Discord with your client's token
client.login(token);
