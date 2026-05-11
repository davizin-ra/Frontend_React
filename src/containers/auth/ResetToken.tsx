import { useAuth } from '../../hooks/useAuth';

const ResetToken = () => {
    const { email, debug, setEmail, tokenReset } = useAuth();

    async function enviarForms(e: React.FormEvent) {
        e.preventDefault();
        await tokenReset();
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

                <button className='bg-white text-black' type='submit'>
                    Resetar
                </button>
            </form>
        </div>
    );
};

export default ResetToken;
