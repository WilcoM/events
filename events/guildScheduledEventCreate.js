const { Events } = require('discord.js');

module.exports = {
	name: Events.GuildScheduledEventCreate,
	once: false,
	async execute(GuildScheduledEventCreate) {
        const guild = GuildScheduledEventCreate.guild;
        const eventName = GuildScheduledEventCreate.name;
		const roleName =  eventName.split(' ').slice(0,8).join('-').toLocaleLowerCase();

		const createdRole = await guild.roles.create({
		    name: roleName,
		    reason: "Event role",
		    permissions: []
		});
	},
};