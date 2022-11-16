import { Rating, Typography } from "@mui/material"
import { useState } from "react"
import Review from "../../../models/Review"

interface Props {
	review: Review
	avgReview: number
}

const ReviewItem = ({ review }: Props) => {
	const [, setValue] = useState<number | null>(2)
	return (
		<>
			<Typography variant="h2">{review?.title}</Typography>
			<Typography variant="body1">{review.name}</Typography>
			<Rating
				value={review?.rating}
				defaultValue={review?.rating}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}
			/>
			<Typography variant="body1">{review.comment}</Typography>
		</>
	)
}

export default ReviewItem
