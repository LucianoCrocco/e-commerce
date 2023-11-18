import { Grid } from '@mui/material';
import { Product } from '../models';
import { ProductCard } from '.';

type Props = {
   products: Product[];
};
export function ProductList({ products }: Props) {
   return (
      <Grid container spacing={4}>
         {products.map((product, index) => (
            <Grid item xs={3} key={index}>
               <ProductCard product={product} />
            </Grid>
         ))}
      </Grid>
   );
}
