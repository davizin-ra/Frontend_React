import { useAuth } from '../../hooks/useAuth';

const ResetSenha = () => {
    const { senha, debug, setSenha, senhaReset } = useAuth();

    async function enviarForms(e: React.FormEvent) {
        e.preventDefault();
        await senhaReset();
    }

    return (
        <div>
            <h1 className='text-white' id='debug'>
                debug:{debug}
            </h1>
            <form onSubmit={enviarForms}>
                <input
                    className='bg-white text-black'
                    type='password'
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <button className='bg-white text-black' type='submit'>
                    Resetar
                </button>
            </form>
        </div>
    );
};

export default ResetSenha;
