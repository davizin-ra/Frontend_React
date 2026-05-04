import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Pages } from '../containers';

const Layout = () => (
    <div className='page-content'>
        <Outlet />
    </div>
);

const routes = createBrowserRouter([
    {
        element: <Outlet />,
        errorElement: <Pages.TelaErro />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: '/',
                        element: <Pages.Home />,
                    },
                    {
                        path: '/login',
                        element: <Pages.Login />,
                    },
                    {
                        path: '/cadastro',
                        element: <Pages.Cadastro />,
                    },
                ],
            },
        ],
    },
]);

const AppRoutes = () => {
    return <RouterProvider router={routes} />;
};

export default AppRoutes;
