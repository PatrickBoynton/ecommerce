import create from "zustand"
import Product from "../models/Product"

interface StoreCartState {
	cartItems: Partial<Product[]>
	setCartItems: (item: Product, qty: number) => void
}


export const useStoreCart = create<StoreCartState>((set) => ({
	cartItems: [],
	setCartItems: (item: Product, qty: number) => {
		set((state) => ({
			cartItems: [...state.cartItems, item]
		}))
	}
}))