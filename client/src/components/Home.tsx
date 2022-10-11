import products from "../products"
import { Grid, Typography } from "@mui/material"
import ProductCard from "./ProductCard"

const Home = () => {
    return <>
			<Typography variant='h2'>Featured Products</Typography>
			<Grid container spacing={2}>
				{products.map(product => {
					return <Grid  xs={4} key={product.id} item>
						<ProductCard product={product} />
					</Grid>
				})}
			</Grid>
    </>
}

export default Home
