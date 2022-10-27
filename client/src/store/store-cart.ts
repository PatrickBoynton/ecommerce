import create from "zustand"
import Product from "../models/Product"

interface StoreCartState {
	cartItems: Partial<Product[]>
	setCartItems: (item: Product, cart: Partial<Product[]>) => void,
	getCartItems: () => void
	setQty: (item: Partial<Product>, qty: string) => void
}


export const useStoreCart = create<StoreCartState>((set) => ({
	cartItems: [],
	setCartItems: (item: Product, cart: Partial<Product[]>) => {
		if(item !== undefined) {
			set((state) => ({
				cartItems: [...state.cartItems, item],
			}))
		}
			localStorage.setItem("cart", JSON.stringify(cart))
	},
	getCartItems: () => {
		const cart = JSON.parse(localStorage.getItem("cart") as string)
		if(cart) {
			set((state) => ({
				cartItems: [...cart]
			}))
		}
			// if (cart.length > 0) {
			// 	set((state) => ({
			// 		cartItems: [...cart]
			// 	}))
			// } else {
			// 	console.log("TEST")
			// }
	},
	setQty: (item: Partial<Product>, qty: string) => {
		item['qty'] = qty
	}
}))