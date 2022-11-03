import { Router } from "express"
import { getCart, postCart } from "../controllers/cartController"

const router = Router()

router.get("/", getCart)

router.post("/", postCart)

export default router
