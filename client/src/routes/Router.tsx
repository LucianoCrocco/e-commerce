import { RouterProvider } from 'react-router-dom';
import { router } from '.';

export function AppRouter(): JSX.Element {
   return <RouterProvider router={router} />;
}
