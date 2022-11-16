import create from "zustand"
import Product from "../models/Product"
import axios from "axios"

interface ProductsState {
	products: Product[]
	product: Partial<Product>
	getProducts: () => void
	setProduct: (id: string) => void
}

export const useStoreProducts = create<ProductsState>((set) => ({
	products: [],
	product: {},

	getProducts: async () => {
		const prods = await axios.get("/api/products")
		set(() => ({
			products: [...prods.data],
		}))
	},

	setProduct: (id: string) => {
		set((state) => ({
			product: state.products.find((p) => String(p.id) === id) as Product,
		}))
	},
}))
