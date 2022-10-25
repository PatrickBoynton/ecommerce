import create from "zustand"
import Product from "../models/Product"

interface StoreCartState {
	cartItems: Partial<Product[]>
	qty: number
	setCartItems: (item: Product, qty: number, cartItems: Partial<Product[]>) => void,
	getCartItems: () => void
}


export const useStoreCart = create<StoreCartState>((set) => ({
	cartItems: [],
	qty: 1,
	setCartItems: (item: Product, qty: number, cartItems: Partial<Product[]>) => {

		if(item !== undefined && cartItems.indexOf(item) === -1) {

			set((state) => ({
				cartItems: [item, ...state.cartItems],
				qty,
			}))
		}
		localStorage.setItem("cart", JSON.stringify(cartItems))
	},
	getCartItems: () => {
		localStorage.getItem("cart")
	}
}))