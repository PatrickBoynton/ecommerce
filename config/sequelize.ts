import {Sequelize} from "sequelize-typescript"
import path from "path"

const dotenv = require("dotenv")

dotenv.config({path: path.resolve(__dirname, "./.env")})

const sequelize = new Sequelize(process.env.DB!, process.env.USER!, process.env.PASSWORD, {
    dialect: "mysql"
})

export default sequelize