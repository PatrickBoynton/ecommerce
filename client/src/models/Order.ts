interface Order {
	paymentMethod: string
	taxPrice: number
	shippingPrice: number
	totalPrice: number
	isPaid: boolean
	isDelivered: boolean
	deliveredAt: Date
}

export default Order