import { api } from '../api/axios';
import { endpoints } from '../api/endpoints';

export const AuthService = {
    cadastro: async (email: string, senha: string) => {
        const res = await api.post(endpoints.auth.cadastro, { email, senha });

        return res.data;
    },
};
