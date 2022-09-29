"use strict"
const products = require("../data/products.js")

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		return await queryInterface.bulkInsert("products", products)
	},

	async down (queryInterface, Sequelize) {
		return await queryInterface.bulkDelete("products", products)
	}
}
