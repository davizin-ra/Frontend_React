import LandingPage from './landingPage'
import Login from './auth/Login'
import Cadastro from './auth/Cadastro'
import  Home from './home'
import ResetToken from './auth/ResetToken'
import ResetSenha from './auth/ResetSenha'
import Palavras from './palavras'

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
    ResetSenha,
    Palavras
}