interface Product {
	id: number
	name: string
	description: string
	image: string
	brand: string
	category: string
	price: number
	countInStock: number
	rating: number
	numReviews: number
	qty?: string
}

export default Product