"use strict"
import bcrypt from "bcryptjs"

const users = [
	{
		id: 1,
		name: "Admin User",
		email:"admin@example.com",
		password:bcrypt.hashSync("safepass1", 10),
		isAdmin:true,
	},
	{
		id: 2,
		name: "Patrick",
		email: "p@p.com",
		password:bcrypt.hashSync("safepass1", 10),
	},
	{
		id: 3,
		name: "Jane",
		email: "j@j.com",
		password:bcrypt.hashSync("safepass1", 10),
	},
	{
		id: 4,
		name: "John",
		email: "jo@jo.com",
		password:bcrypt.hashSync("safepass1", 10),
	},
]

// eslint-disable-next-line no-undef
module.exports = {
	async up (queryInterface, Sequelize) {
		return await queryInterface.bulkInsert("users", users)
	},

	async down (queryInterface, Sequelize) {
		return await queryInterface.bulkDelete("users", users)
	}
}
