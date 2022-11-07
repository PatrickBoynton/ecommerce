import { Router } from "express"
import {
	getCart,
	getCartItem,
	createCartItem,
	deleteCartItem,
} from "../controllers/cartController"

const router = Router()

router.get("/", getCart)

router.get("/:id", getCartItem)

router.delete("/:id", deleteCartItem)

router.post("/", createCartItem)

export default router
