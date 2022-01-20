const fs = require("fs");
const ascii = require("ascii-table");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

/**
 * Load slash commands from files and register them
 */
function loadCommands(client, token, clientId, guildId) {
  let commands = [];
  // Prepare ascii table for logging
  const table = new ascii().setHeading("Slash Commands", "Load Status");
  // read folder of commands
  const categoryFolders = fs.readdirSync("./commands");
  // iterate over the categories of commands
  for (const folder of categoryFolders) {
    // get the commands of the category
    const commandFiles = fs
      .readdirSync(`./commands/${folder}`)
      .filter((file) => file.endsWith(".js"));
    // iterate over the commands
    for (const file of commandFiles) {
      const command = require(`../../commands/${folder}/${file}`);
      // check the command
      if (command.name) {
        // add the command to the global list of commands
        client.commands.set(command.name, command);
        commands.push(command);
        table.addRow(file, " Loaded ✔️");
      } else {
        table.addRow(
          file,
          "❌ => Missing a help.name or help.name is not in string"
        );
      }
    }
  }
  console.log(table.toString());
  // create rest client
  const rest = new REST({ version: "9" }).setToken(token);

  // register commands
  rest
    .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log("Successfully registered application commands."))
    .catch(console.error);
}
module.exports = { loadCommands };
