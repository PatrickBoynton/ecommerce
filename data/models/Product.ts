import sequelize from "../../config/sequelize"
import { DataTypes, Model } from "sequelize"
import Review from "./Review"
import Cart from "./Cart"

class Product extends Model {
	id: number
	name: string
	image: string
	brand: string
	category: string
	description: string
	rating: number
	numReviews: number
	price: number
	countInStock: number
	createdAt: Date
	updatedAt: Date
}

Product.init(
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		image: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		brand: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		numReviews: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0,
		},
		countInStock: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
		updatedAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
	},
	{
		sequelize,
		tableName: "products",
	}
)

Product.hasMany(Review)
Product.hasMany(Cart)

export default Product
