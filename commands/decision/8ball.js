const { SlashCommandBuilder } = require('discord.js');

const answers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  "Don't count on it.",
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
];

function randomize() {
  let random = Math.floor(Math.random() * 20);
  return answers[random];
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Roll a magic 8 ball.')
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
      await interaction.reply(
        `**Question:** ${question}\n**Answer:** ${answer}`
      );
    }
  },
};
