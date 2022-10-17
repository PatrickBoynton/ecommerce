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
        <Card>
            <Link to={`product/${product.id}`}>
                <CardHeader
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
                    <Typography className="white-p">
                        ({product.numReviews})
                    </Typography>
                    <Typography className="white-p" variant="body2">
                        {product.description}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    </>
}

export default ProductCard
