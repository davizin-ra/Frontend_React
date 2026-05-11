import { useAuth } from "../../hooks/useAuth";

const Cadastro = () => {

    const {email, senha, setEmail, setSenha, debug, cadastrar} = useAuth();

    async function enviarForms(e: React.FormEvent){
        e.preventDefault();
        await cadastrar();
    }

    return (
        <div>
            <h1 className="text-white" id= 'debug'>debug: {debug}</h1>
            <form onSubmit={enviarForms}>
                <input className="bg-white text-black"
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input className="bg-white text-black"
                    type='password'
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <button className="bg-white text-black" type='submit'>Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;
