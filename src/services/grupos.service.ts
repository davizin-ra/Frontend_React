import { api } from './api/axios';
import { endpoints } from './api/endpoints';

export const GruposService = {
    acharGrupo: async (userId: string) => {
        const res = await api.get(endpoints.grupos.acharGrupo, {
            params: {
                userId,
            },
        });

        return res.data;
    },

    acharMembros: async (grupoId: string) => {
        const res = await api.get(endpoints.grupos.acharMembros, {
            params: {
                grupoId,
            },
        });

        return res.data;
    },
};
