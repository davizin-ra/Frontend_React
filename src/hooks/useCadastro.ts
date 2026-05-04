import { useState } from 'react';
import { AuthService } from '../services/auth/auth.service';

export function useCadastro() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [debug, setDebug] = useState('');

    async function cadastrar() {
        try {
            const res = await AuthService.cadastro(email, senha);

            setDebug(res.message || "Usuário cadastrado com sucesso")
            setEmail('');
            setSenha('');
        } catch (error:any) {

            const message = error.response?.data?.message || "Erro inexperado";
            setDebug(message);
        }
    }
    return {email, setEmail, senha, setSenha, debug, setDebug, cadastrar}
}