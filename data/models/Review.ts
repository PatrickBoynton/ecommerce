import sequelize from "../../config/sequelize"
import { DataTypes, Model, Optional } from "sequelize"
import IReview from "../interfaces/IReview"

type ReviewCreationAttributes = Optional<IReview, "id">

class Review extends Model<IReview, ReviewCreationAttributes> {
	id: number
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
		ProductId: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize,
		tableName: "review",
	}
)

export default Review
