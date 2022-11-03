import express from "express"
import dotenv from "dotenv"
import { syncDb } from "./config/syncDb"
import productRoutes from "./routes/productRoutes"
import notFound from "./middleware/notFound"
import statusMessage from "./middleware/statusMessage"
import userRoutes from "./routes/userRoutes"
import cartRoutes from "./routes/cartRoutes"

dotenv.config({ path: "./config/.env" })

const app = express()

app.use(express.static("public"))

app.use(express.json())

app.use("/api/cart", cartRoutes)

app.use("/api/products", productRoutes)

app.use("/api/users", userRoutes)

app.use(notFound)

app.use(statusMessage)

const port = process.env.PORT

syncDb()

app.listen(port, () => {
	console.log(`Now listening on port ${port}`)
})
