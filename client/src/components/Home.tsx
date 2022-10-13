import { Container, Grid, Typography } from "@mui/material"
import ProductCard from "./ProductCard"
import { useStore } from "../store/store"
import { useEffect } from "react"

const Home = () => {
	const { products, getProducts } = useStore()

	useEffect(() => {
		getProducts()
	}, [getProducts])

    return <Container>
			<Typography variant='h2'>Featured Products</Typography>
			<Grid container spacing={2}>
				{products.map(product => <Grid  xs={3} md={4} sm={12} key={product.id} item>
						<ProductCard product={product} />
					</Grid>)}
			</Grid>
    </Container>
}

export default Home
