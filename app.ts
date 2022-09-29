import express  from "express"
import dotenv from "dotenv"
import { syncDb } from "./config/syncDb"
import productRoutes from "./routes/productRoutes"

dotenv.config({path: "./config/.env"})

const app = express()

app.use(express.json())

app.get("/api/products", productRoutes)

const port = process.env.PORT

syncDb()

app.listen(port, () => console.log(`Now listening on port http://localhost:${port}`))