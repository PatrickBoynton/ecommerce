import create from "zustand"
import Product from "../models/Product"

interface StoreCartState {
	cartItems: Partial<Product[]>
	cartStorage: any[]
	qty: number[]
	setCartItems: (item: Product) => void,
	getCartItems: (cart: Partial<Product[]>) => void
	setQty: (item: Partial<Product>, qty: string) => void
}


export const useStoreCart = create<StoreCartState>((set) => ({
	cartItems: [],
	qty: [],
	cartStorage: [],
	setCartItems: (item: Product) => {
		if(item) {
			set((state) => ({
				cartItems: [item, ...state.cartItems],
			}))
		}
	},
	getCartItems: (cart: Partial<Product[]>) => {
		localStorage.setItem("cart", JSON.stringify(cart))
	},
	setQty: (item: Partial<Product>, qty: string) => {
		if(qty !== undefined) {
			item["qty"] = qty
		} else {
			item["qty"] = "1"
		}
	}
}))