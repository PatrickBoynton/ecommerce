import create from "zustand"
import Product from "../models/Product"

interface StoreCartState {
	cartItems: Partial<Product[]>
	cartTotal: number
	setCartItems: (item: Product, cartItems: Partial<Product[]>) => void
	getStorageItems: () => void
	getCartItems: (cart: Partial<Product[]>) => void
	setQty: (item: Partial<Product>, qty: string) => void
	setCartTotal: (total: number) => void
	deleteCartItems: () => void
	editCartItems: (product: Product, cart: Partial<Product[]>) => void
}

export const useStoreCart = create<StoreCartState>((set) => ({
	cartItems: [],
	cartStorage: [],
	cartTotal: 0,
	setCartItems: (item: Product, cartItems: Partial<Product[]>) => {
		const existingProduct = cartItems.find((product) => product?.id === item.id)
		if (item && !existingProduct) {
			set((state) => ({
				cartItems: [item, ...state.cartItems],
			}))
		} else {
			const currentQty = Number(existingProduct?.qty)
			const incomingQty = Number(item?.qty)
			const newQty = currentQty + incomingQty

			if (existingProduct && newQty < existingProduct.countInStock) {
				existingProduct["qty"] = String(newQty)
			} else if (
				existingProduct &&
				newQty > Number(existingProduct?.countInStock)
			) {
				existingProduct["qty"] = String(existingProduct?.countInStock)
			}
		}
	},

	getStorageItems: () => {
		const cartInStorage: Product[] = JSON.parse(
			localStorage.getItem("cart") as string
		)
		if (cartInStorage !== null) {
			set(() => ({
				cartItems: [...cartInStorage],
			}))
		}
	},

	getCartItems: (cart: Partial<Product[]>) => {
		if (cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart))
	},

	setQty: (item: Partial<Product>, qty: string) => {
		if (qty !== undefined && qty) {
			item["qty"] = qty
		}
	},

	setCartTotal: (total: number) => {
		set(() => ({
			cartTotal: total,
		}))
	},

	deleteCartItems: () => {
		set(() => ({
			cartItems: [],
			cartTotal: 0,
		}))
		localStorage.removeItem("cart")
	},

	editCartItems: (product: Product, cartItems: Partial<Product[]>) => {
		const item = cartItems.find((x) => x === product)
		const index = cartItems.indexOf(item)

		if (index !== -1) {
			cartItems.splice(index, 1)
		}

		localStorage.setItem("cart", JSON.stringify(cartItems))
	},
}))
