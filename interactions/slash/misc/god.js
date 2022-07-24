/**
 * @Ever wonder what a Flow God looks like?.
 * @author Jacob Tucker & BoiseITGuru
 * @since 0.0.0
 * @version 2.0.0
 */

// Deconstructed the constants we need in this file.
const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */
module.exports = {
	// The data needed to register slash commands to Discord.

	data: new SlashCommandBuilder()
		.setName("god")
		.setDescription(
			"Ever wonder what a Flow God looks like?"
		),

	async execute(interaction) {
		/**
		 * @type {string}
		 * @description The "command" argument
		 */
		let name = interaction.options.getString("command");

		/**
		 * @type {EmbedBuilder}
		 * @description Help command's embed
		 */
		const helpEmbed = new EmbedBuilder().setColor("Random");

		helpEmbed
      .setTitle("Jacob's YouTube Channel")
      .setDescription('Ever wonder what a Flow God looks like? Click the link above.')
      .setURL('https://www.youtube.com/channel/UCf6DzMRwj7SJ3nPrZqd5hHw')
      .setThumbnail('https://i.imgur.com/gDQX1Ej.png')

		// Replies to the interaction!

		await interaction.reply({
			embeds: [helpEmbed],
		});
	},
};