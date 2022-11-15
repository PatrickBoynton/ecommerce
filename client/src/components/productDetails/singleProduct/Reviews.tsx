import { Typography } from "@mui/material"
import { useEffect } from "react"
import { useStoreReview } from "../../../store/store-review"
import ReviewItem from "./ReviewItem"
import { useParams } from "react-router-dom"

const Reviews = () => {
	const params = useParams()
	const { reviews, getReviews, setNumReviews, setAvgReviews, avgReviews } =
		useStoreReview()

	useEffect(() => {
		getReviews()
	}, [getReviews])

	useEffect(() => {
		const currentReviews = []
		const ratings: number[] = []
		reviews
			?.filter((review) => String(review.ProductId) === params.id)
			.map((review) => {
				currentReviews.push(review)
				ratings.push(review.rating)
			})
		setAvgReviews(
			ratings.reduce((a, b) => Math.ceil((a + b) / ratings.length), 0)
		)
		setNumReviews(currentReviews.length)
	}, [params.id, reviews, setNumReviews, setAvgReviews])

	return (
		<>
			<Typography variant="h1">Reviews</Typography>
			{reviews
				?.filter((review) => String(review.ProductId) === params.id)
				.map((review) => (
					<ReviewItem key={review.id} review={review} avgReview={avgReviews} />
				))}
		</>
	)
}

export default Reviews
