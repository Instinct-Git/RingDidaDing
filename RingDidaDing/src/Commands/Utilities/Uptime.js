const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['ut'],
			description: 'This provides the current uptime of the bot.',
			category: 'Utilities'
		});
	}

	async run(message) {
		const embed = new MessageEmbed()
		.setColor('PURPLE')
		.setDescription(`**My uptime is** \`${ms(this.client.uptime, { long: true })}\``)
		message.channel.send(embed);
	}

};
