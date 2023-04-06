const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('jill')
    .setDescription(
      'I never wanted to breed with anyone more than I want to with Jill Stingray.'
    ),
  async execute(interaction) {
    await interaction.reply(
      "I never wanted to breed with anyone more than I want to with Jill Stingray. That perfect, curvy body. Those flat breasts. The child bearing hips of a literal goddess. It honestly fucking hurts knowing that I'll never mate with her, pass my genes through her, and have her birth a set of perfect offspring. I'd do fucking ANYTHING for the chance to get Jill pregnant. A N Y T H I N G. And the fact that I can't is quite honestly too much to fucking bear. Why would Sukeban Games create something so perfect? To fucking tantalize us? Fucking laugh in our faces?! Honestly guys, I just fucking can't anymore. Fuck"
    );
  },
};
