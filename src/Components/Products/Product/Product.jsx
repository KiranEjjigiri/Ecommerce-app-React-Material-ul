import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyle from "./style";

const Product = ({ product }) => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      ></CardMedia>
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h3" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
