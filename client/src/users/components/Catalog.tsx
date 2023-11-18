import { useEffect, useState } from 'react';
import { Product } from '../models';
import { ProductList } from '.';

export function Catalog(): JSX.Element {
   const [products, setProducts] = useState<Product[]>([]);

   useEffect(() => {
      fetch('http://localhost:5000/api/products')
         .then((res) => res.json())
         .then((data) => setProducts(data));
   }, []);
   return (
      <>
         <ProductList products={products} />
      </>
   );
}
