import { RouteObject } from 'react-router-dom';
import { AboutPage, Catalog, ContactPage, HomePage, ProductDetails } from '..';

export const UserChildRoutes: Array<RouteObject> = [
   {
      path: '/',
      element: <HomePage />,
   },
   {
      path: '/catalog',
      element: <Catalog />,
   },
   {
      path: '/catalog/:id',
      element: <ProductDetails />,
   },
   {
      path: '/about',
      element: <AboutPage />,
   },
   {
      path: '/contact',
      element: <ContactPage />,
   },
];
