import { Router } from "express"
import {
	getProduct,
	getProducts,
	addProducts,
} from "../controllers/productsController"

const router = Router()

router.get("/", getProducts)

router.post("/", addProducts)

router.get("/:id", getProduct)

export default router
