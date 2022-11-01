import create from "zustand"
import Product from "../models/Product"

interface StoreCartState {
	cartItems: Partial<Product[]>
	cartTotal: number
	setCartItems: (item: Product) => void
	getStorageItems: () => void
	getCartItems: (cart: Partial<Product[]>) => void
	setQty: (item: Partial<Product>, qty: string) => void
	setCartTotal: (total: number) => void
	deleteCartItems: () => void
}

export const useStoreCart = create<StoreCartState>((set) => ({
	cartItems: [],
	cartStorage: [],
	cartTotal: 0,
	setCartItems: (item: Product) => {
		if(item) {
			set((state) => ({
				cartItems: [item, ...state.cartItems],
			}))
		}
	},

	getStorageItems: () => {
		const cartInStorage: Product[] = JSON.parse(localStorage.getItem("cart") as string)
		if(cartInStorage !== null) {
			set(() => ({
				cartItems: [...cartInStorage]
			}))
		}
	},

	getCartItems: (cart: Partial<Product[]>) => {
		if(cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart))
	},

	setQty: (item: Partial<Product>, qty: string) => {
		if (qty !== undefined && qty) {
			item["qty"] = qty
		}
	},

	setCartTotal: (total: number) => {
		set(() => ({
			cartTotal: total
		}))
	},

	deleteCartItems: () => {
		set(() => ({
			cartItems: [],
			cartTotal: 0
		}))
		localStorage.removeItem("cart")
	}
}))