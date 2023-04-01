const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('finds a dog'),
	async execute(interaction) {
        await interaction.deferReply();
		const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());
		interaction.editReply({ files: [url] });
	},
};