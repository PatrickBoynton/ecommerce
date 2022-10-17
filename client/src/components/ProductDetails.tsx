import { Button, Grid, Rating, Typography } from "@mui/material"
import Product from "../models/Product"

interface Props {
    product: Product
}

const ProductDetails = ({product}: Props) => {
    return <>
        <Grid item xs={3}>
            <Button>Go Back</Button>
            <img src={product?.image} alt="Product" style={{width: "100%"}}/>
        </Grid>
        <Grid item xs={5}>
            <Typography variant="h1">{product?.name}</Typography>
            <Typography>Brand {product?.brand}</Typography>
            <Typography>
                <Rating value={product?.rating}/>
                ({product?.numReviews})
            </Typography>
            <Typography variant="h5">About the product: </Typography>
            <Typography variant="body1">{product?.description}</Typography>
        </Grid>
    </>
}

export default ProductDetails
