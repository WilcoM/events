const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildScheduledEventUserRemove,
	once: false,
	async execute(GuildScheduledEvent, client) {
		const guild = GuildScheduledEvent.guild;

        const eventId = GuildScheduledEvent.id;
        const event = await GuildScheduledEvent.guild.scheduledEvents.fetch({ guildScheduledEvent: eventId, force: true });
		const roleName = event.name.split(' ').slice(0,8).join('-').toLocaleLowerCase();

        const role = guild.roles.cache.find(r => r.name === roleName);		

		if(role) {
     	   guild.members.removeRole({user: client.id, role: role.id});
		}
	},
};