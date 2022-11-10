import { DataTypes, Model } from "sequelize"
import sequelize from "../../config/sequelize"
import Product from "./Product"

class Cart extends Model {
	id: number
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
		tableName: "cart",
	}
)

Cart.hasMany(Product)
Product.belongsTo(Cart)

export default Cart
