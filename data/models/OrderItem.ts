import sequelize from "../../config/sequelize"
import { DataTypes } from "sequelize"

const OrderItem = sequelize.define("order_items", {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	image: {
	    type: DataTypes.STRING,
	    allowNull: false
	},
	price: {
	    type: DataTypes.FLOAT,
	    allowNull: false
	}
})

export default OrderItem