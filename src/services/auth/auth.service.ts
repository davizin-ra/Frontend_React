import { api } from '../api/axios';
import { endpoints } from '../api/endpoints';

export const AuthService = {
    cadastro: async (email: string, senha: string) => {
        const res = await api.post(endpoints.auth.cadastro, { email, senha });

        return res.data;
    },
    login: async (email: string, senha: string) => {
        const res = await api.post(endpoints.auth.login, { email, senha });

        return res.data;
    },
    resetToken: async (email: string) => {
        const res = await api.post(endpoints.auth.resetToken, { email });

        return res.data;
    },
    resetSenha: async (token: string, senha: string) => {
        const res = await api.put(endpoints.auth.resetSenha, { token, senha });

        return res.data;
    },
};
