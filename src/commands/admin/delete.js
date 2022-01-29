const discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("delete")
        .setDescription("delete messages")
        .addNumberOption((option) =>
            option
                .setName("num")
                .setDescription("Enter the number of messages to delete")
                .setRequired(true)
        ),
    execute(client, interaction, args) {
        if (interaction.options.getNumber("num") < 1) {
            interaction.reply({
                content: "the number of messages must be > 1",
                ephemeral: true,
            });
        } else {
            interaction.channel.bulkDelete(
                interaction.options.getNumber("num")
            );
            interaction.reply({
                content: "the messages were deleted successfully",
                ephemeral: true,
            });
        }
    },
};
