import create from "zustand"
import Product from "../models/Product"
import axios from "axios"
import products from "../products"

interface ProductsState {
	products:  Product[]
	product: Partial<Product>
	quantityLeft: number[]
	getProducts: () => void
	setProduct: (id: string) => void
}

const defaultProduct: Partial<Product> = { rating: 0}

export const useStoreProducts = create<ProductsState>((set) => ({
	products: [],
	product: defaultProduct,
	quantityLeft: [],

	getProducts: async () => {
		const prods = await axios.get("/api/products")
		set((state) => ({
			products: [...prods.data]
		}))
	},

	setProduct: (id: string) => {
		set(state => ({
				product: products.find(p => String(p.id) === id) as Product
		}))
	},

	setQuantityLeft: (product: Product) => {
		set(set => ({
			quantityLeft: Array.from(new Array(product?.countInStock), (x: number, i: number) => i + 1)
		}))
	}
}))