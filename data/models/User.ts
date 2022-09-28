import sequelize from "../../config/sequelize"
import { DataTypes } from "sequelize"
import Order from "./Order"
import Product from "./Product"

const User = sequelize.define("users", {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	isAdmin: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	},
	createdAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	},
	updatedAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	},
})

User.hasMany(Order)
User.hasMany(Product)

export default User