const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dog')
    .setDescription('Posts a random dog photo.'),
  async execute(interaction) {
    const dogResult = await request(
      'https://api.thedogapi.com/v1/images/search',
      {
        headers: {
          'X-API-KEY': process.env.DOG_API_KEY,
        },
      }
    );
    const dog = await dogResult.body.json();
    // interaction.guild is the object representing the Guild in which the command was run
    await interaction.reply(dog[0].url);
  },
};
