import products from "../products"
import { useParams } from "react-router-dom"
import { Button, Grid, Rating, Typography } from "@mui/material"

const SingleProduct = () => {
    const params = useParams()
    const product = products.find(p => String(p.id) === params.id)
    return <Grid container spacing={3}>
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
        <Grid item xs={4}>
            <Typography variant="h3">${product?.price}</Typography>
            <Typography variant="h3">{product?.countInStock! > 0 ? 'In Stock' : 'Out of Stock'} {product?.countInStock} left </Typography>
            <Button disabled={product?.countInStock! < 1}>Add To Cart</Button>
        </Grid>
?    </Grid>
}

export default SingleProduct
