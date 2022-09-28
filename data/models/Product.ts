import sequelize from "../../config/sequelize"
import { DataTypes } from "sequelize"
import Review from "./Review"

const Product = sequelize.define("products", {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	image: {
		type: DataTypes.STRING,
		allowNull: false
	},
	brand: {
		type: DataTypes.STRING,
		allowNull: false
	},
	category: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	},
	rating: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	numReviews: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0
	},
	price: {
		type: DataTypes.INTEGER,
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
		defaultValue: DataTypes.NOW
	},
	updatedAt: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	}
})

Product.hasMany(Review)

export default Product