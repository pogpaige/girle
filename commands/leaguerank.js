const { SlashCommandBuilder } = require('@discordjs/builders');
const { apikey } = require('../config.json')
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leaguerank')
		.setDescription('pulls account rank (doesnt work under level30)')
		.addStringOption(option => option
			.setName('region')
			.setDescription('searches name')
			.addChoices(
				{ name: 'NA', value: 'NA1' },
				{ name: 'EUW', value: 'EUW1' })
			.setRequired(true) )
		.addStringOption(option => option
			.setName('username')
			.setDescription('searches name')),
	async execute(interaction) {
        await interaction.deferReply();
			const name = interaction.options.getString('username');
			let r = interaction.options.getString('region');
			const userinfo = await fetch('https://'+r+'.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + name + '?api_key=' + apikey).then(response => response.json());
				if (userinfo.status) {
					interaction.editReply('account not found!')
						console.log('[LEAGUERANK] no account info found!')
						return;
				} else {
					console.log('[LEAGUERANK] userinfo verified!')
				}
			const rankinfo = await fetch('https://'+r+'.api.riotgames.com/lol/league/v4/entries/by-summoner/' + userinfo.id + '?api_key=' + apikey).then(response => response.json());
				if (rankinfo.length < 1) {
					interaction.editReply('account is unranked!')
						console.log('[LEAGUERANK] no rank info found!')
						return;
				} else {
					console.log('[LEAGUERANK] rankinfo verified!')
				}
			if(interaction.options.getString('region') === 'NA1') {
				r = 'americas'
			} else if(interaction.options.getString('region') === 'EUW1') {
				r = 'europe'
			}
			const getmatchId = await fetch('https://'+r+'.api.riotgames.com/lol/match/v5/matches/by-puuid/' + userinfo.puuid + '/ids?start=0&count=5&api_key=' + apikey).then(response => response.json());
			// below goes from newest to oldest (0, 1, 2, 3, 4)
			const game0 = await fetch('https://'+r+'.api.riotgames.com/lol/match/v5/matches/' + getmatchId[0] + '?api_key=' + apikey).then(response => response.json());
			for (var i = 0; i < game0.info.participants.length; i++) {
				if (game0.info.participants[i].puuid === userinfo.puuid) {
					g0kills = game0.info.participants[i].kills
					g0deaths = game0.info.participants[i].deaths
					g0champ = game0.info.participants[i].championName
				}
			}
			// if (game0.info.participants.length < 1) {
			//	console.log('[LEAGUERANK] failed to grab game0 data!')
			//		return;
			//}
			const game1 = await fetch('https://'+r+'.api.riotgames.com/lol/match/v5/matches/' + getmatchId[1] + '?api_key=' + apikey).then(response => response.json());
			for (var i = 0; i < game1.info.participants.length; i++) {
				if (game1.info.participants[i].puuid === userinfo.puuid) {
					g1kills = game1.info.participants[i].kills
					g1deaths = game1.info.participants[i].deaths
					g1champ = game1.info.participants[i].championName
				}
			}
			const game2 = await fetch('https://'+r+'.api.riotgames.com/lol/match/v5/matches/' + getmatchId[2] + '?api_key=' + apikey).then(response => response.json());
			for (var i = 0; i < game2.info.participants.length; i++) {
				if (game2.info.participants[i].puuid === userinfo.puuid) {
					g2kills = game2.info.participants[i].kills
					g2deaths = game2.info.participants[i].deaths
					g2champ = game2.info.participants[i].championName
				}
			}
			const game3 = await fetch('https://'+r+'.api.riotgames.com/lol/match/v5/matches/' + getmatchId[3] + '?api_key=' + apikey).then(response => response.json());
			for (var i = 0; i < game3.info.participants.length; i++) {
				if (game3.info.participants[i].puuid === userinfo.puuid) {
					g3kills = game3.info.participants[i].kills
					g3deaths = game3.info.participants[i].deaths
					g3champ = game3.info.participants[i].championName
				}
			}
			const game4 = await fetch('https://'+r+'.api.riotgames.com/lol/match/v5/matches/' + getmatchId[4] + '?api_key=' + apikey).then(response => response.json());
			for (var i = 0; i < game4.info.participants.length; i++) {
				if (game4.info.participants[i].puuid === userinfo.puuid) {
					g4kills = game4.info.participants[i].kills
					g4deaths = game4.info.participants[i].deaths
					g4champ = game4.info.participants[i].championName
				}
			}
			if(interaction.options.getString('region') === 'NA1') {
					r = 'NA'
				} else if(interaction.options.getString('region') === 'EUW1') {
					r = 'EUW'
			}
		interaction.editReply(`**name:** ${rankinfo[0].summonerName} (`+r+`)\n**rank:** ${rankinfo[0].tier} ${rankinfo[0].rank} (${rankinfo[0].wins}W ${rankinfo[0].losses}L)\n**MOST RECENT GAMES:**\n`+g0champ+` - `+g0kills+`K `+g0deaths+`D\n`+g1champ+` - `+g1kills+`K `+g1deaths+`D\n`+g2champ+` - `+g2kills+`K `+g2deaths+`D\n`+g3champ+` - `+g3kills+`K `+g3deaths+`D\n`+g4champ+` - `+g4kills+`K `+g4deaths+`D`)
	}
};
//			fetch('https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + temp + '?api_key=' + apikey).then(response => {
//				const ya = response.summonerName;
//				console.log(' ${ya[0].summonerName} ')
//			interaction.editReply(ya)
//		interaction.editReply( ${info[0].summonerName} )