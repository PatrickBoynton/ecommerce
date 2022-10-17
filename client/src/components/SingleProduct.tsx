import products from "../products"
import { useParams } from "react-router-dom"
import { Button, Grid, Rating, Typography } from "@mui/material"
import ImageCarousel from "./ImageCarousel"

const SingleProduct = () => {
    const rightPanel = {
        backgroundColor: "#242424",
        borderLeft: "4px solid red",
        color: "white"
    }

    const detailsGlobal = {
        borderBottom: "4px solid red"
    }

    const cartButton = {
        border: "4px solid red",
        color: "white"
    }
    const params = useParams()
    const product = products.find(p => String(p.id) === params.id)
    return <>
        <Grid container spacing={3} sx={detailsGlobal}>
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
            <Grid item xs={4} sx={rightPanel}>
                <Typography variant="h3">${product?.price}</Typography>
                <Typography variant="h3">{product?.countInStock! > 0 ? 'In Stock' : 'Out of Stock'} {product?.countInStock} left </Typography>
                <Button sx={cartButton} disabled={product?.countInStock! < 1}>Add To Cart</Button>
            </Grid>
        </Grid>
            <ImageCarousel />
    </>
}


export default SingleProduct
