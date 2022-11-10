import sequelize from "../../config/sequelize"
import { DataTypes } from "sequelize"

const ShippingAddress = sequelize.define("shipping_address", {
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	city: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	postalCode: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	country: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

export default ShippingAddress
