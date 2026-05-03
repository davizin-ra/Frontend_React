import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './router';
import './styles/main.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppRoutes />
    </StrictMode>
);