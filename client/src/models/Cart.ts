import Product from "./Product"

interface Cart {
	id: number
	qty: number
	totalPrice: number
	Products?: Product[]
}

export default Cart
