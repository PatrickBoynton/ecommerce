import { DataTypes, Model } from "sequelize"
import sequelize from "../../config/sequelize"

class Cart extends Model {
	qty: number
	totalPrice: number
}

Cart.init(
	{
		qty: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		totalPrice: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		sequelize,
		tableName: "carts",
	}
)

export default Cart
