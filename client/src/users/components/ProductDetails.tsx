import {
   Divider,
   Grid,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableRow,
   Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetFetch } from '../../hooks';
import { Product } from '../models';

export function ProductDetails(): JSX.Element {
   const { id } = useParams<string>();

   const {
      data: product,
      isLoading,
      hasError,
   } = useGetFetch<Product>(`products/${id}`);

   if (isLoading) return <h3>Loading...</h3>;
   if (hasError) return <h3>Product not found</h3>;

   return (
      <Grid container spacing={6}>
         <Grid item xs={6}>
            <img
               src={product!.pictureUrl}
               alt={product!.name}
               style={{ width: '100%' }}
            />
         </Grid>
         <Grid item xs={6}>
            <Typography variant="h3">{product!.name}</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h4" color="secondary">
               ${product!.price}
            </Typography>
            <TableContainer>
               <Table>
                  <TableBody>
                     <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{product!.name}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Descrption</TableCell>
                        <TableCell>{product!.description}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>{product!.type}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Brand</TableCell>
                        <TableCell>{product!.brand}</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell>Quantity in stock</TableCell>
                        <TableCell>{product!.quantityInStock}</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </TableContainer>
         </Grid>
      </Grid>
   );
}
