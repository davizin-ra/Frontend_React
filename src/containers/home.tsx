import { useEffect } from 'react';
import { useGrupos } from '../hooks/useGrupo';

const Home = () => {
    const { grupo, acharGrupo, membros, acharMembros } = useGrupos();

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    useEffect(() => {
        acharGrupo();
        acharMembros();
    }, []);

    async function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    return (
        <div>
            <h1 className='text-white'>
                Olá {user.email}, você faz parte do grupo {grupo}{' '}
            </h1>
            <button onClick={logout}>logout</button>
            <div>
                <h1>Membros:</h1>

                <ul>
                    {membros.map(membro => (
                        <li key={membro.id}>{membro.nome || membro.email}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
