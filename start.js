// bot startup script
const fs = require('fs');
const { Client, Collection, Intents, Message } = require('discord.js');
const controller = require("./controller.js");
const respond = require("./responses.js");
const { token } = require("./config.json");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS], });


client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    client.user.setActivity('.5% bladee listener')
    console.log(`logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    controller.filterMessage(message);
})

client.on("messageCreate", (message) => {
    respond.respondToMessage(message);
})

client.on("messageCreate", (message) => {
    respond.reactToMessage(message);
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);