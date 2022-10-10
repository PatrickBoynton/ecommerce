import { Router } from "express"
import { authenticateUser, getUserProfile } from "../controllers/userController"
import protect from "../middleware/authMiddleware"

const router = Router()

router.post("/login", authenticateUser)
router.get("/profile", [protect] , getUserProfile)

export default  router