import { Rating, Typography } from "@mui/material"
import { useStoreProducts } from "../../store/store-products"
import { useState } from "react"

const Reviews = () => {
	const { product } = useStoreProducts()
	const [value, setValue] = useState<number | null>(2)

	return <>
			<Typography variant="h1">Reviews</Typography>
			<Typography variant="h2">This product is awesome 5 stars!</Typography>
			<Rating value={product.rating as number}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}/>
			<Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet aspernatur expedita labore non officia quibusdam ratione saepe sint.</Typography>
			<Typography variant="h2">Best gadget ever.</Typography>
			<Rating  value={product.rating}/>
			<Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid amet aspernatur expedita labore non officia quibusdam ratione saepe sint.</Typography>
    </>
}

export default Reviews
