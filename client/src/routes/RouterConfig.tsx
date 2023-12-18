import { Navigate, createBrowserRouter } from 'react-router-dom';
import { UserChildRoutes, UserRoutes } from '../users';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <UserRoutes />,
      children: UserChildRoutes,
      errorElement: <Navigate replace to="/not-found" />,
   },
]);
