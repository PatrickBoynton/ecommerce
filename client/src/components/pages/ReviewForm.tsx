import { Button, Paper, Rating, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const ReviewForm = () => {
	const params = useParams()
	const [val, setVal] = useState(0)

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const name = "Patrick"
		const title = e.target[0].value
		const comment = e.target[2].value
		const rating = val

		const newReview = {
			name,
			title,
			comment,
			rating,
			ProductId: params.id,
		}

		await axios.post("/api/reviews", newReview)
	}
	return (
		<Paper sx={{ color: "white" }}>
			<form
				style={{ display: "flex", flexDirection: "column" }}
				method="POST"
				onSubmit={(e) => handleSubmit(e)}
			>
				<Typography variant="h2">Write a Review</Typography>
				<TextField label="Title" name="name" />
				<TextField label="Description" name="comment" />
				<Rating
					name="rating"
					onChange={(_, value) => {
						setVal(value as number)
					}}
				/>
				<Button type="submit">Submit Review</Button>
			</form>
		</Paper>
	)
}

export default ReviewForm
