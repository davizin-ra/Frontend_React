import LandingPage from './LandingPage'
import Login from './auth/Login'
import Cadastro from './auth/Cadastro'
import  Home from './Home'
import ResetToken from './auth/ResetToken'
import ResetSenha from './auth/ResetSenha'

const PaginaNe = () => <div>404- Pagina não encontrada</div>
const TelaErro = () => <div>Erro!!</div>

export const Pages = {
    PaginaNe,
    TelaErro,
    LandingPage,
    Login,
    Cadastro,
    Home,
    ResetToken,
    ResetSenha
}