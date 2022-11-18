import create from "zustand"
import Product from "../models/Product"
import axios from "axios"

interface ProductsState {
	products: Product[]
	product: Partial<Product>
	getProducts: () => void
	setProduct: (id: number) => void
	getProduct: (id: string) => void
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

	getProduct: async (id: string) => {
		const product = await axios.get(`/api/products/${id}`)

		set(() => ({
			product: product.data,
		}))
	},

	setProduct: (id: number) => {
		set((state) => ({
			product: state.products.find((p) => p.id === id) as Product,
		}))
	},
}))
