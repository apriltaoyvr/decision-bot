const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gorp')
    .setDescription('Gorp'),
  async execute(interaction) {
    await interaction.reply(`https://www.youtube.com/shorts/KSm4OYAioZo`);
  },
};
