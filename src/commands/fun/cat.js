const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Posts a random cat photo.'),
  async execute(interaction) {
    const response = await request(
      'https://api.thecatapi.com/v1/images/search',
      {
        headers: {
          'X-API-KEY': process.env.CAT_API_KEY,
        },
      }
    );
    const cat = await response.body.json();
    // interaction.guild is the object representing the Guild in which the command was run
    await interaction.reply(cat[0].url);
  },
};
