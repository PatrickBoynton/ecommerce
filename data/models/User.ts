import sequelize from "../../config/sequelize"
import { DataTypes } from "sequelize"
import Order from "./Order"
import Product from "./Product"
import bcrypt from "bcryptjs"

const User = sequelize.define("users", {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: "email",
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
}, {
	hooks: {
		beforeCreate: async (user: any) => {
			if (user.password) {
				const salt = await bcrypt.genSalt(10)
				user.password = bcrypt.hashSync(user.password, salt)
			}
		},
		beforeUpdate:async (user: any) => {
			if (user.password) {
				const salt = await bcrypt.genSalt(10)
				user.password = bcrypt.hashSync(user.password, salt)
			} else{
				return
			}
		}
	}
})

User.prototype.comparePassword = async function (password: string | null) {
	if(password !== null) return await bcrypt.compare(password, this.password)
}

User.hasMany(Order)
User.hasMany(Product)

export default User