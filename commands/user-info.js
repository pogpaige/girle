const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Display info about yourself.'),
	async execute(interaction) {
		return interaction.reply(`Ur Username: ${interaction.user.username}\nUr ID: ${interaction.user.id}\nDate Created: ${interaction.user.createdAt}`);
	},
};