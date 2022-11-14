import { Router } from "express"
import {
	getCart,
	getCartItem,
	createCartItem,
	deleteCartItem,
	deleteAllCartItems,
	getCartTotal,
} from "../controllers/cartController"

const router = Router()

router.get("/total", getCartTotal)

router.get("/", getCart)

router.get("/:id", getCartItem)

router.delete("/", deleteAllCartItems)

router.delete("/:id", deleteCartItem)

router.post("/", createCartItem)

export default router
