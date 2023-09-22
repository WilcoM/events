const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildScheduledEventUpdate,
	once: false,
	async execute(oldGuildScheduledEvent, newGuildScheduledEvent) {
		const guild = newGuildScheduledEvent.guild;
        const roleName = newGuildScheduledEvent.name.split(' ').slice(0,8).join('-').toLocaleLowerCase();
        const role = guild.roles.cache.find(r => r.name === roleName);		

        if(newGuildScheduledEvent.status >= 3) {
            if(role) {
                guild.roles.delete(role.id);
            }
        }
	},
};