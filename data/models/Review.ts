import sequelize from "../../config/sequelize"
import {DataTypes} from "sequelize";

const Review = sequelize.define("reviews", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Review