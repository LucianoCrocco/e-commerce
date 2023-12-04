import { Product } from '../models';
import { ProductList } from '.';
import { agent } from '../../api';
import { useEffect, useState } from 'react';

export function Catalog(): JSX.Element {
   const [products, setProducts] = useState<Product[]>([]);
   useEffect(() => {
      agent.Catalog.list()
         .then((products) => setProducts(products))
         .catch((error) => console.log(error));
   }, []);

   return (
      <>
         <ProductList products={products} />
      </>
   );
}
