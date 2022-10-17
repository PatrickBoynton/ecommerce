import { Container, Grid, Typography } from "@mui/material"
import ProductCard from "./ProductCard"
import { useStoreProducts } from "../store/store-products"
import { useEffect } from "react"
import Product from "../models/Product"

const Home = () => {
	const { products, getProducts } = useStoreProducts()
	useEffect(() => {
		getProducts()
	}, [getProducts])

    return <Container>
			<Typography variant='h2'>Featured Products</Typography>
			<Grid container spacing={2}>
				{products.map((product: Product) => <Grid  xs={3} md={4} sm={12} key={product.id} item>
						<ProductCard product={product} />
					</Grid>)}
			</Grid>
    </Container>
}

export default Home
