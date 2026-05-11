import Home from './Home'
import Login from './auth/Login'
import Cadastro from './auth/Cadastro'
import  Privada from './Privada'
import ResetToken from './auth/ResetToken'
import ResetSenha from './auth/ResetSenha'

const PaginaNe = () => <div>404- Pagina não encontrada</div>
const TelaErro = () => <div>Erro!!</div>

export const Pages = {
    PaginaNe,
    TelaErro,
    Home,
    Login,
    Cadastro,
    Privada,
    ResetToken,
    ResetSenha
}