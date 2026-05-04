import {default as Home} from './Home'
import {default as Login} from './Login'
import {default as Cadastro} from './auth/Cadastro'

const PaginaNe = () => <div>404- Pagina não encontrada</div>
const TelaErro = () => <div>Erro!!</div>

export const Pages = {
    PaginaNe,
    TelaErro,
    Home,
    Login,
    Cadastro,
}