const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildScheduledEventUserAdd,
	once: false,
	async execute(GuildScheduledEvent, client) {
		const guild = GuildScheduledEvent.guild;
		const eventId = GuildScheduledEvent.id;
		const event = await GuildScheduledEvent.guild.scheduledEvents.fetch({ guildScheduledEvent: eventId, force: true });

		const roleName = event.name.split(' ').slice(0,8).join('-').toLocaleLowerCase();
		const role = guild.roles.cache.find(r => r.name === roleName);		

		if(role) {
			guild.members.addRole({user: client.id, role: role.id});
		}
	},
};