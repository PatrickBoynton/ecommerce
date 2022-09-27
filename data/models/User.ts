import sequelize from "../../config/sequelize";
import {DataTypes} from "sequelize"

const User = sequelize.define("users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

export default User