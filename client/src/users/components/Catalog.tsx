import { Product } from '../models';
import { ProductList } from '.';
import { useGetFetch } from '../../hooks';

export function Catalog(): JSX.Element {
   const { data, isLoading, hasError } = useGetFetch<Product[]>('products');

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
