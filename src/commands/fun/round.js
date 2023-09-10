const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('round')
    .setDescription('The body is round'),
  async execute(interaction) {
    await interaction.reply(`https://www.youtube.com/watch?v=JyOuM-xVvOI`);
  },
};
