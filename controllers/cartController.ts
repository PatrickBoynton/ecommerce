import { Request, Response } from "express"
import Cart from "../data/models/Cart"
import Product from "../data/models/Product"

export const getCart = async (req: Request, res: Response) => {
	try {
		const cart: any = await Cart.findAll({ include: Product })
		return res.send(cart)
	} catch (e: any) {
		console.error(e.message)
		return res.status(500)
	}
}

export const getCartItem = async (req: Request, res: Response) => {
	const cartItem = await Cart.findByPk(req.params.id, { include: Product })
	if (!cartItem) return res.status(200)
	return res.send(cartItem)
}

export const createCartItem = async (req: Request, res: Response) => {
	const { qty, id } = req.body

	try {
		const product = await Product.findByPk(id)

		if (product) {
			const cartItem = {
				qty,
				totalPrice: Number((qty * product.price).toFixed(2)),
			}
			const cartItemToSave = await Cart.build(cartItem)

			if (!product.CartId) {
				await cartItemToSave.save()
				await product.update({ CartId: cartItemToSave.id })
				return res.send(cartItemToSave)
			} else {
				const updatedCartItem = {
					qty,
					totalPrice: Number((qty * product.price).toFixed(2)),
				}

				await Cart.update(updatedCartItem, {
					where: { id: product.CartId },
				})
				// return res.send(cartItemToSave)
				return res.status(204).send("Cart Updated!")
			}
		}
	} catch (e: any) {
		console.log(e.message)
		return res.status(500).send(e.message)
	}
}

export const deleteCartItem = async (req: Request, res: Response) => {
	const cartItem = await Cart.findByPk(req.params.id)

	cartItem?.destroy()

	return res.status(204).send("Item deleted")
}

export const deleteAllCartItems = async (req: Request, res: Response) => {
	const cart = await Cart.findAll()

	cart.forEach((item) => item.destroy())

	return res.status(204)
}

export const getCartTotal = async (req: Request, res: Response) => {
	const cart = await Cart.findAll()

	const total = cart
		.map((item) => item.totalPrice)
		.reduce((prev, cur) => prev + cur)
	console.log(total)

	return res.json(total)
}
