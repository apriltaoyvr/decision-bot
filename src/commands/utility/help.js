const { SlashCommandBuilder } = require('discord.js');
const { inlineCode } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Display commands and information.'),
  async execute(interaction) {
    await interaction.reply(
      'Hello, I am a bot to help you make decision and post cat and dog photos.\n\n' +
        '\nFor information:\n' +
        `${inlineCode('/help')} for info (What you are using right now!)\n` +
        `${inlineCode('/user')} to display your user information\n` +
        `${inlineCode('/server')} to display server information\n` +
        '\nFor making decisions:\n' +
        `${inlineCode('/decision')} for a yes or no question\n` +
        `${inlineCode('/8ball')}for a magic 8 ball\n` +
        `${inlineCode('/roll')} to roll a die, 1d20 by default\n` +
        '\nFor fun:\n' +
        `${inlineCode('/cat')} for a random cat photo\n` +
        `${inlineCode('/dog')} for a random dog photo\n`
    );
  },
};