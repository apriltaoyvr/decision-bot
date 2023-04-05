const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dog')
    .setDescription('Posts a random dog photo.'),
  async execute(interaction) {
    // Fetch random dog image with api key

    const response = await request(
      'https://api.thedogapi.com/v1/images/search?size=small',
      {
        headers: {
          'X-API-KEY': process.env.DOG_API_KEY,
        },
      }
    );
    const dog = await response.body.json();
    await interaction.reply(dog[0].url);
  },
};
