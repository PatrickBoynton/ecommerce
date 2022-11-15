import sequelize from "../../config/sequelize"
import { DataTypes } from "sequelize"

const Review = sequelize.define("reviews", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	rating: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	comment: {
		type: DataTypes.STRING,
	},
})

export default Review
