import { Router } from "express"
import { authenticateUser } from "../controllers/userController"
import statusMessage from "../middleware/statusMessage"
import notFound from "../middleware/notFound"

const router = Router()

router.post("/login", [statusMessage], authenticateUser)

export default  router