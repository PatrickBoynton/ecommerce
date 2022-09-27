import express from "express"
import dotenv from "dotenv"
import products from "./data/products"
import path from "path"
import sequelize from "./config/sequelize"

dotenv.config({path: path.join(process.cwd(), ".env")})

const app = express()

app.use(express.json())

app.get("/:id", (req, res) => {
    const product = products.find(product => product.id)

    res.send(product)
})

app.get("/", (req, res) => {
    res.send(products)
})

const {PORT} = process.env

const port = Math.round(Math.random() * (9000 - 8000) + 8000)

sequelize.sync({alter: true, logging: false})


app.listen(port, () => console.log(`Now listening on port ${port}`))