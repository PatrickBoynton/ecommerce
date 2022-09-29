import { Request, Response, Router } from "express"
import Product from "../data/models/Product"

const router = Router()

router.get("/", async (req: Request, res: Response) => {
	try {
		const products = await Product.findAll()

		res.send(products)
	} catch(e: any) {
		console.error(e.message)
		res.status(500).send("Server error.")
	}

})

router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findByPk(req.params.id)

		res.send(product)
	} catch(e: any) {
		console.error(e.message)
		res.status(500).send("Server error")
	}
})

export default router