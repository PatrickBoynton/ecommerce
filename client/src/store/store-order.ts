import create from "zustand"
import axios from "axios"

interface OrderState {
	total: string
	paymentMethod: string[]
	shipping: number
	tax: number
	subtotal: number
	setSubtotal: () => void
	setTotal: () => void
}
export const useStoreOrder = create<OrderState>((set) => ({
	total: "0",
	paymentMethod: ["Paypal", "Credit Card"],
	shipping: 5.99,
	tax: 0.06,
	subtotal: 0,

	setSubtotal: async () => {
		const response = await axios.get("api/cart/total")
		const total = response.data
		set((state) => ({
			total,
			subtotal: total * state.tax + total,
		}))
	},

	setTotal: async () => {
		const response = await axios.get("api/cart/total")
		const total = response.data
		set(() => ({
			total,
		}))
	},
}))
