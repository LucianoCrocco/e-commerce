import { Product } from '../models';
import { ProductList } from '.';
import { useFetch } from '../../hooks';

export function Catalog(): JSX.Element {
   const { data, isLoading, hasError } = useFetch<Product[]>(
      'http://localhost:5000/api/products'
   );

   return (
      <>
         {isLoading || hasError ? (
            <h3>Loading...</h3>
         ) : (
            <ProductList products={data!} />
         )}
      </>
   );
}
