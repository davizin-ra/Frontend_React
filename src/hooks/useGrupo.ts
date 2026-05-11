import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GruposService } from '../services/grupos.service';

export function useGrupos() {
    const [grupo, setGrupo] = useState('');

    const [searchParams] = useSearchParams();
    const userP = searchParams.get('user');
    const user = userP ? JSON.parse(userP) : null;

    async function acharGrupo() {
        try {
            
            if (!user?.id) {
                setGrupo('Usuário inválido');
                return;
            }
            const res = await GruposService.acharGrupo(user.id);
            setGrupo(res.nome);
        } catch (error:any) {
            const message = error.response?.data?.message || 'Erro inesperado';
            setGrupo(message);
        }
    }

    return { grupo, acharGrupo };
}
