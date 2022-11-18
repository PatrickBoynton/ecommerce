import sequelize from "../../config/sequelize"
import { DataTypes, Model, Optional } from "sequelize"

interface ReviewAttributes {
	id: number
	name: string
	rating: number
	title: string
	comment: string
	// Optional to get around typescript error.
	ProductId?: number
}

type ReviewCreationAttributes = Optional<ReviewAttributes, "id">

class Review extends Model<ReviewAttributes, ReviewCreationAttributes> {
	id: number
	name: string
	rating: number
	title: string
	comment: string
}

Review.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
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
	},
	{
		sequelize,
		tableName: "reviews",
	}
)

export default Review
