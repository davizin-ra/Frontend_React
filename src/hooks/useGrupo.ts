import { useState } from 'react';
import { GruposService } from '../services/grupos.service';

export function useGrupos() {
    const [grupo, setGrupo] = useState('');
    const [membros, setMembros] = useState<any[]>([]);

    async function acharGrupo() {
        try {
            const userStorage = localStorage.getItem('user');

            if (!userStorage) {
                setGrupo('Erro! faça login novamente');
                return;
            }

            const user = JSON.parse(userStorage);

            if (!user?.id) {
                setGrupo('Usuário inválido');
                return;
            }
            const res = await GruposService.acharGrupo(user.id);
            setGrupo(res.grupo.nome);
            return res;
        } catch (error:any) {
            const message = error.response?.data?.message || 'Erro inesperado';
            setGrupo(message);
        }
    }

    async function acharMembros() {
        try {
            const grupo = await acharGrupo();

            if (!grupo) {
                return;
            }

            const res = await GruposService.acharMembros(grupo.grupo.id);
            setMembros(res.membros);
            console.log(res.membros);
        } catch (error:any) {
            const message = error.response?.data?.message || 'Erro inesperado';

            console.log(message);
        }
    }

    return { grupo, acharGrupo, membros, acharMembros };
}
