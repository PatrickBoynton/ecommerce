import sequelize from "../../config/sequelize"
import { DataTypes } from "sequelize"

const Cart = sequelize.define("cart", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	qty: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	totalPrice: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
})

export default Cart
