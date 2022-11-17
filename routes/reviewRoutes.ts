import { Router } from "express"
import { getReviews, postReview } from "../controllers/reviewController"

const router = Router()

router.post("/:id", postReview)

router.get("/", getReviews)

export default router
