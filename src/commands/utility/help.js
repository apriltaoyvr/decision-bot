const { SlashCommandBuilder } = require('discord.js');
const { codeBlock } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Display commands and information.'),
  async execute(interaction) {
    await interaction.reply(
      `Hello, I am a bot to help you make decision and post cat and dog photos.
       ${codeBlock('/help')} for info (What you are using right now!)

       For making decisions:
       ${codeBlock('/decision')} for a yes or no question 
       ${codeBlock('/8ball')} for a magic 8 ball
       ${codeBlock('/roll')} to roll a die, 1d20 by default

       For fun:
       ${codeBlock('/cat')} for a random cat photo
       ${codeBlock('/dog')} for a random dog photo
      `
    );
  },
};
