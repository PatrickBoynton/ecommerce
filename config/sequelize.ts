import {Sequelize} from "sequelize-typescript"

const sequelize = new Sequelize("ecommerce", "root", "safepass1", {
    dialect: "mysql"
})

export default sequelize