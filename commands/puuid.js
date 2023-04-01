const { SlashCommandBuilder } = require('@discordjs/builders');
const { apikey } = require("../config.json");
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('puuid')
		.setDescription('pulls summoner info (wip)')
		.addStringOption(option => option.setName('username').setDescription('searches summoner name')),
	async execute(interaction) {
        await interaction.deferReply();
		const name = interaction.options.getString('username');
		const list = await fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name + '?api_key=' + apikey).then(response => response.json());
		interaction.editReply(`**name:** ${list.name}\n**encrypted summoner id:** ${list.id}\n**encrypted account id:** ${list.accountId}\n**puuid:** ${list.puuid}\n**level:** ${list.summonerLevel}`);
	},
};