import express from "express"
import dotenv from "dotenv"
import products from "./data/products"
import { syncDb } from "./config/syncDb"

dotenv.config({path: "./config/.env"})

const app = express()

app.use(express.json())

app.get("/:id", (req, res) => {
    const product = products.find(product => product.id)

    res.send(product)
})

app.get("/", (req, res) => {
    res.send(products)
})

const port = Math.round(Math.random() * (9000 - 8000) + 8000)


syncDb()


app.listen(port, () => console.log(`Now listening on port http://localhost:${port}`))