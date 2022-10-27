import { Button, Grid, Rating, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useStoreProducts } from "../../store/store-products"
import { useState } from "react"


const ProductDetails = () => {
    const navigate = useNavigate()
    const { product } = useStoreProducts()
    const [value, setValue] = useState<number | null>(2)

    return <>
        <Grid item xs={3}>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
            <img src={product?.image} alt="Product" style={{width: "100%"}}/>
        </Grid>
        <Grid item xs={5}>
            <Typography variant="h1">{product?.name}</Typography>
            <Typography>Brand {product?.brand}</Typography>
            <Typography>
                <Rating value={product?.rating}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}/>
                ({product?.numReviews})
            </Typography>
            <Typography variant="h5">About the product: </Typography>
            <Typography variant="body1">{product?.description}</Typography>
        </Grid>
    </>
}

export default ProductDetails
