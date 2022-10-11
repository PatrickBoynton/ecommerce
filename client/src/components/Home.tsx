import products from "../products"
import Grid2 from "@mui/material/Unstable_Grid2"
import { useEffect } from "react"
import { List, ListItem, Typography } from "@mui/material"
const Home = () => {
		useEffect(() => {
			console.log(products)
		}, [])
    return <>
			<h1>Featured Products</h1>
			<Grid2 container>
				<List>
					{products.map(product => <ListItem>
						<Typography variant="h1">
							{product.name}
						</Typography>
					</ListItem>)}
				</List>
			</Grid2>
    </>
}

export default Home
