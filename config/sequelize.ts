import {Sequelize} from "sequelize-typescript"

const sequelize = new Sequelize("playground", "root", "safepass1", {
    dialect: "mysql"
})

export default sequelize