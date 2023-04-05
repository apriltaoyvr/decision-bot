const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cat')
    .setDescription('Posts a random cat photo.'),
  async execute(interaction) {
    // Fetch random cat image with api key
    const response = await request(
      'https://api.thecatapi.com/v1/images/search?size=small',
      {
        headers: {
          'X-API-KEY': process.env.CAT_API_KEY,
        },
      }
    );
    const cat = await response.body.json();

    await interaction.reply(cat[0].url);
  },
};
