import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Pages } from '../containers';
import { PrivateRoute, PublicRoute } from '../utils/checkAuth';

// const Layout = () => (
//     <div className='page-content'>
//         <Outlet />
//     </div>
// );

const routes = createBrowserRouter([
    {
        element: <Outlet />,
        errorElement: <Pages.TelaErro />,
        children: [
            {
                path: '/manutencao',
                element: <h1>teste</h1>,
            },
            {
                element: <PublicRoute />,
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
                    {
                        path: '/resettoken',
                        element: <Pages.ResetToken />,
                    },
                    {
                        path: '/resetsenha',
                        element: <Pages.ResetSenha />,
                    },
                ],
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/protegida',
                        element: <Pages.Privada />,
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
