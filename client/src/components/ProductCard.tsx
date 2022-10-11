import {
    Card,
    CardContent,
    CardHeader,
    CardMedia, Rating,
    Typography
} from "@mui/material"
import IProduct from "../models/Product"
import { StarBorderOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"

interface Props {
    product: IProduct
}

const ProductCard = ({product}: Props) => {
    return <>
        <Card sx={{ borderRadius: "6px", height: "100%", border: "2px solid black", backgroundColor: "#242424" }}>
            <Link to={`product/${product.id}`}>
                <CardHeader
                  sx={{backgroundColor: "red", color: "white", height: "20%"}}
                  title={product.name}
                  subheader={`$${product.price}`}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={product.image}
                  alt="ProductCard Image"
                />
                <CardContent>
                    <Rating
                      sx={{color: "red"}}
                      name="simple-controlled"
                      precision={0.5}
                      value={product.rating}
                      emptyIcon={
                          <StarBorderOutlined sx={{color: "red"}}/>
                      }
                      onChange={(event, newValue) => {
                          // setValue(newValue)
                      }}
                    />
                    <Typography sx={{color: "white"}}>
                        ({product.numReviews})
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{color: "white"}}>
                        {product.description}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    </>
}

export default ProductCard
