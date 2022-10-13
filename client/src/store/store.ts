import create from "zustand"
import Product from "../models/Product"
import axios from "axios"

interface ProductsState {
	products:  Product[],
	getProducts: () => void
}

export const useStore = create<ProductsState>((set) => ({
	products: [],
	getProducts: async () => {
		const prods = await axios.get("/api/products")
		set((state) => ({
			products: [...prods.data]
		}))
	}
}))