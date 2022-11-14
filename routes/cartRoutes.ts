import { Router } from "express"
import {
	getCart,
	getCartItem,
	createCartItem,
	deleteCartItem,
	deleteAllCartItems,
} from "../controllers/cartController"

const router = Router()

router.get("/", getCart)

router.get("/:id", getCartItem)

router.delete("/", deleteAllCartItems)

router.delete("/:id", deleteCartItem)

router.post("/", createCartItem)

export default router
