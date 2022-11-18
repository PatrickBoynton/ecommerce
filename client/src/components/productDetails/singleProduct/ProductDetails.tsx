import { Button, Grid, Rating, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useStoreProducts } from "../../../store/store-products"
import { useState } from "react"

const ProductDetails = () => {
	const navigate = useNavigate()
	const params = useParams()
	const { product } = useStoreProducts()
	const [, setValue] = useState<number | null>(2)

	return (
		<>
			{product ? (
				<>
					<Grid item xs={3}>
						<Button onClick={() => navigate(-1)}>Go Back</Button>
						<img src={product?.image} alt="Product" style={{ width: "100%" }} />
					</Grid>
					<Grid item xs={5}>
						<Typography variant="h1">{product?.name}</Typography>
						<Link to={`/write/${params.id}`}>Write Review</Link>
						<Typography>Brand {product?.brand}</Typography>
						<Typography>
							<Rating
								value={product?.rating}
								defaultValue={product?.rating}
								onChange={(event, newValue) => {
									setValue(newValue)
								}}
							/>
							({product?.numReviews})
						</Typography>
						<Typography variant="h5">About the product: </Typography>
						<Typography variant="body1">{product?.description}</Typography>
					</Grid>
				</>
			) : (
				<h1>Product Not Found</h1>
			)}
		</>
	)
}

export default ProductDetails
