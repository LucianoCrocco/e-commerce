import { Product } from '../models';
import { LoadingComponent, ProductList } from '.';
import { agent } from '../../api';
import { useEffect, useState } from 'react';

export function Catalog(): JSX.Element {
   const [products, setProducts] = useState<Product[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      agent.Catalog.list()
         .then((products) => setProducts(products))
         .catch((error) => console.log(error))
         .finally(() => setLoading(false));
   }, []);

   if (loading) return <LoadingComponent message="Loading products..." />;
   return (
      <>
         <ProductList products={products} />
      </>
   );
}
