import { Router } from "express"
import { getReviews, postReview } from "../controllers/reviewController"

const router = Router()

router.post("/", postReview)

router.get("/", getReviews)

export default router
