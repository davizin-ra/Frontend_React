import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { api } from '../services/api/axios';

export const PrivateRoute = () => {
    const [autenticado, setAutenticado] = useState<boolean | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setAutenticado(false);
            return;
        }

        api.get('/protegida', {
            headers: { Authorization: 'Bearer ' + token },
        })
            .then(res => {
                if (res.data.success) {
                    setAutenticado(true);
                } else {
                    localStorage.removeItem('token');
                    setAutenticado(false);
                }
            })
            .catch(error => {
                console.error('Erro ao verificar token:', error);
                setAutenticado(false);
            });
    }, []);
    if (autenticado === null) {
        return <h1>Carregando...</h1>;
    }

    return autenticado ? <Outlet /> : <Navigate to='/login' />;
};

export const PublicRoute = () => {
    const token = localStorage.getItem('token');
    return token ? <Navigate to='/home' /> : <Outlet />;
};
