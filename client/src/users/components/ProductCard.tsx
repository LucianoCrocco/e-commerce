import {
   Avatar,
   Button,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Typography,
} from '@mui/material';
import { Product } from '../models';
import { Link } from 'react-router-dom';

type Props = {
   product: Product;
};

export function ProductCard({ product }: Props) {
   return (
      <Card>
         <CardHeader
            avatar={
               <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  {product.name.charAt(0).toUpperCase()}
               </Avatar>
            }
            title={product.name}
            titleTypographyProps={{ fontWeight: 'bold', color: 'primary.main' }}
         />

         <CardMedia
            sx={{
               height: 140,
               backgroundSize: 'contain',
               bgcolor: 'primary.light',
            }}
            image={product.pictureUrl}
            title={product.name}
         />
         <CardContent>
            <Typography gutterBottom color="secondary" variant="h5">
               ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
               {product.brand} / {product.type}
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small">Add to Cart</Button>
            <Button component={Link} to={`/catalog/${product.id}`} size="small">
               View
            </Button>
         </CardActions>
      </Card>
   );
}
