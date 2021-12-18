const { changeAuthData } = require('../flowscripts/write_data.js');
const { Permissions } = require('discord.js');

const execute = (message, args) => {
    if (message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD) && (args.length === 4 || args.length === 5) && (!isNaN(args[1]))) {
        let role = message.guild.roles.cache.find(role => role.name === args[3]);
        if (!role) {
            message.channel.send("This role does not exist!");
            return;
        }

        // GuildID, NFT/FT, #, public path name, role id, optional minting link
        if (args.length === 4) changeAuthData(message.guild.id, args[0], args[1], args[2], role.id, "")
        else if (args.length === 5) changeAuthData(message.guild.id, args[0], args[1], args[2], role.id, args[4])
    } else if (message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) {
        message.channel.send("You did not supply the correct number of arguments. `!setup [NFT/FT] [number of tokens] [public path] [role name] [OPTIONAL: link to the minting site]`")
    } else {
        console.log("You do not have permissions to do this.")
    }
}

module.exports = {
    name: 'setup',
    description: 'setup auth for your server',
    execute: execute,
}
