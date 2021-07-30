import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from "./style";
const products = [
  {
    id: 1,
    name: "shoes",
    description: "This is shoes",
    price: "$5",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/21d38052-598b-44f6-a857-123c9f72b015/air-force-1-07-shoe-WrLlWX.png"
  },
  {
    id: 2,
    name: "shoes",
    description: "This is shoes",
    price: "$5",
    image:
      "https://images.nike.com/is/image/DotCom/CW2289_111?$NIKE_PWP_GRAY$&wid=420&hei=420"
  }
];

const Products = ({ product }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xm={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
