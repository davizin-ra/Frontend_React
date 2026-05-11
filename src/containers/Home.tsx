import { useEffect } from "react";
import { useGrupos } from "../hooks/useGrupo";

const Home = () => {

    const {grupo, acharGrupo} = useGrupos();

    const user = JSON.parse(localStorage.getItem('user') || '{}')

    useEffect(() => {
        acharGrupo()
    }, [])

    async function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    return (
        <div>
            <h1 className="text-white">Olá {user.email}, você faz parte do grupo {grupo} </h1>
            <button onClick={logout}>logout</button>
        </div>
    );
};

export default Home;
