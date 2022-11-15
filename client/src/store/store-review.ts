import create from "zustand"
import axios from "axios"
import Review from "../models/Review"

interface ReviewState {
	reviews: Review[]
	avgReviews: number
	numReviews: number
	getReviews: () => void
	setNumReviews: (numReviews: number) => void
	setAvgReviews: (avg: number) => void
}

export const useStoreReview = create<ReviewState>((set) => ({
	reviews: [],
	avgReviews: 0,
	numReviews: 0,
	getReviews: async () => {
		const response = await axios.get("/api/reviews")
		set(() => ({
			reviews: [...response.data],
		}))
	},
	setNumReviews: (numReviews: number) => {
		set(() => ({
			numReviews,
		}))
	},
	setAvgReviews: (avg: number) => {
		set(() => ({
			avgReviews: avg,
		}))
	},
}))
