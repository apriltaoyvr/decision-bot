const { SlashCommandBuilder } = require('discord.js');

function randomize() {
  let random = Math.floor(Math.random() * 2);
  if (random === 1) {
    return 'Yes.';
  } else {
    return 'No.';
  }
}

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
    const answer = randomize();
    if (question === null) {
      await interaction.reply(answer);
    } else {
      await interaction.reply(`**Question:** ${question}\n**Answer:** ${answer}`);
    }
  },
};
