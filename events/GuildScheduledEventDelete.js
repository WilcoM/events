const { Events, GuildForumThreadManager } = require('discord.js');

module.exports = {
	name: Events.GuildScheduledEventDelete,
	once: false,
	async execute(GuildScheduledEvent) {
		const guild = GuildScheduledEvent.guild;
        const roleName = GuildScheduledEvent.name.split(' ').slice(0,8).join('-').toLocaleLowerCase();
        const role = guild.roles.cache.find(r => r.name === roleName);		

		if(role) {
        guild.roles.delete(role.id);
		console.log('Removed role');
		}

		console.log('Event has been deleted.');
	},
};