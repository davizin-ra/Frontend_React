import { useCadastro } from "../../hooks/useCadastro";

const Cadastro = () => {

    const {email, senha, setEmail, setSenha, debug, cadastrar} = useCadastro();

    async function enviarForms(e: React.FormEvent){
        e.preventDefault();
        await cadastrar();
    }

    return (
        <div>
            <h1 id= 'debug'>{debug}</h1>
            <form onSubmit={enviarForms}>
                <input
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;
