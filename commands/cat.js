const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('finds a cat'),
	async execute(interaction) {
		await interaction.deferReply();
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		interaction.editReply({ files: [file] });
	},
};