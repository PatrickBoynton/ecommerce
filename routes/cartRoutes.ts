import { Router } from "express"
import {
	getCart,
	getCartItem,
	createCartItem,
} from "../controllers/cartController"

const router = Router()

router.get("/", getCart)

router.get("/:id", getCartItem)

router.post("/", createCartItem)

export default router
