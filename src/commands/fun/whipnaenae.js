const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('whipnaenae')
    .setDescription('Whip and nae nae.'),
  async execute(interaction) {
    await interaction.reply(`Now watch me whip.`);
    await interaction.replyAgain(`Now watch me nae nae.`);
  },
};
