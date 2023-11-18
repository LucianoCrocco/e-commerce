import { Outlet } from 'react-router-dom';
import { Layout } from '../layout';

export function UserRoutes(): JSX.Element {
   return (
      <Layout>
         <Outlet />
      </Layout>
   );
}
