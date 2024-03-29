const { SlashCommandBuilder } = require('discord.js');
const { bold } = require('discord.js');

function roll(die, sides) {
  const results = [];
  for (let i = 0; i < die; i++) {
    results.push((Math.ceil(Math.random() * sides)));
  }
  return results;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Roll die.')
    .addStringOption((option) =>
      option
        .setName('die')
        .setDescription('The number of die to roll. Defaults to 1.')
    )
    .addStringOption((option) =>
      option
        .setName('sides')
        .setDescription('The number of sides in the die. Defaults to 20.')
    ),
  async execute(interaction) {
    const numberOfDie = interaction.options.getString('die') ?? 1;
    const numberOfSides = interaction.options.getString('sides') ?? 20;
    const result = roll(numberOfDie, numberOfSides);
    const sum = result.reduce((partialSum, a) => partialSum + a, 0);

    await interaction.reply(
      `You rolled ${numberOfDie}d${numberOfSides}. \nThe results are ${result.join(', ')} \nTotal: ${bold(sum)}`
    );
  },
};
