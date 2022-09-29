"use strict"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const users = require("../data/users.js")

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		return await queryInterface.bulkInsert("users", users)
	},

	async down (queryInterface, Sequelize) {
		return await queryInterface.bulkDelete("users", users)
	}
}
