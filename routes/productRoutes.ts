import { Router } from "express"
import {
	getProduct,
	getProducts,
	addProducts,
	editProducts,
	deleteProduct,
} from "../controllers/productsController"

const router = Router()

router.get("/", getProducts)

router.post("/", addProducts)

router.get("/:id", getProduct)

router.patch("/:id", editProducts)

router.delete("/:id", deleteProduct)

export default router
