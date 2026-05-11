import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { email, senha, login, debug, setEmail, setSenha } = useAuth();

    async function enviarForms(e: React.FormEvent) {
        e.preventDefault();
        const certo = await login();
        if (certo){
            navigate('/home')
        }
    }

    return (
        <div>
            <h1 className='text-white' id='debug'>
                debug:{debug}
            </h1>
            <form onSubmit={enviarForms}>
                <input
                    className='bg-white text-black'
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className='bg-white text-black'
                    type='password'
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <button className='bg-white text-black' type='submit'>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
