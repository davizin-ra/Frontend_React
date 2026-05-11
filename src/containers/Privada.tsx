const Privada = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')

    return (
        <div>
            <h1 className="text-white">{user.email}</h1>
        </div>
    );
};

export default Privada;
