import create from "zustand"
import Product from "../models/Product"

interface StoreCartState {
	cartItems: Partial<Product[]>
	cartTotal: number
	qty: number[]
	setCartItems: (item: Product) => void,
	getCartItems: (cart: Partial<Product[]>) => void
	setQty: (item: Partial<Product>, qty: string) => void
	setCartTotal: (total: number) => void
}


export const useStoreCart = create<StoreCartState>((set) => ({
	cartItems: [],
	qty: [],
	cartStorage: [],
	cartTotal: 0,
	setCartItems: (item: Product) => {
		if(item) {
			set((state) => ({
				cartItems: [item, ...state.cartItems],
			}))
		}
	},

	getCartItems: (cart: Partial<Product[]>) => {
		if(cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart))
	},

	setQty: (item: Partial<Product>, qty: string) => {
		if (qty !== undefined && qty) {
			item["qty"] = qty
		} else {
			item["qty"] = "1"
		}
	},

	setCartTotal: (total: number) => {
		set((state) => ({
			cartTotal: total
		}))
	}
}))