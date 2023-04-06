const { SlashCommandBuilder } = require('discord.js');
const { bold } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('decide')
    .setDescription('Helps you decide on yes/no decisions.')
    .addStringOption((option) =>
      option
        .setName('question')
        .setDescription('The question you want answered')
    ),
  async execute(interaction) {
    const question = interaction.options.getString('question');
    const answer = Math.floor(Math.random() * 2) ? 'Yes' : 'No';

    // Repeat question if question param was entered
    question === null
      ? await interaction.reply(answer)
      : await interaction.reply(
          bold('Question: ') + question + '\n' + bold('Answer: ') + answer
        );
  },
};
