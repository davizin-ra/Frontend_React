import { useState } from 'react';
import { AuthService } from '../services/auth/auth.service';
import { useSearchParams } from 'react-router-dom';

export function useAuth() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [debug, setDebug] = useState('');

    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    async function cadastrar() {
        try {
            const res = await AuthService.cadastro(email, senha);

            setDebug(res.message || 'Usuário cadastrado com sucesso');
            setEmail('');
            setSenha('');
        } catch (error:any) {
            const message = error.response?.data?.message || 'Erro inesperado';
            setDebug(message);
        }
    }

    async function login() {
        try{
            const res = await AuthService.login(email, senha);

            localStorage.setItem('user', JSON.stringify(res.user))
            localStorage.setItem('token', res.token)

            setDebug('Login realizado com sucesso');
            return true;
        } catch (error:any){
            const message = error.response?.data?.message || 'Erro inesperado';
            setDebug(message)
            setSenha('')
            return false;
        }
    }

    async function tokenReset(){
        try{
            const res = await AuthService.resetToken(email)
            setDebug(res.message)
        } catch(error:any){
            const message = error.response?.data?.message || 'Erro inesperado'
            setDebug(message)
        }
    }

    async function senhaReset(){
        try{
            if(!token){
                setDebug('Link inválido ou expirado');
                return;
            }

            const res = await AuthService.resetSenha(token, senha)
            setDebug(res.message)
        } catch(error:any){
            const message = error.response?.data?.message || 'Erro inesperado'
            setDebug(message)
        }
    }

    return { email, setEmail, senha, setSenha, debug, setDebug, cadastrar, login, tokenReset, senhaReset};
}
