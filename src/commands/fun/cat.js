const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Posts a random cat photo.'),
  async execute(interaction) {
    const catResult = await request(
      'https://api.thecatapi.com/v1/images/search'
    );
    const { cat } = await catResult.body.json();
    // interaction.guild is the object representing the Guild in which the command was run
    await interaction.reply(cat.url);
  },
};
