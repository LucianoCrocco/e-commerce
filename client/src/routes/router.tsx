import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserChildRoutes, UserRoutes } from '../users';

export function AppRouter(): JSX.Element {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <UserRoutes />,
         children: UserChildRoutes,
      },
   ]);

   return <RouterProvider router={router} />;
}
