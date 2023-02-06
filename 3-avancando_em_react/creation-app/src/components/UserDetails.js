
const UserDetails = ({name, age, occupation}) => {
    return (
        <>
            <h1>Checar Idade</h1>
            <p>{name}</p>
            <p>{age}</p>
            <p>{occupation}</p>
            {age >= 18? ("Habilitado para tirar carteira de habilitação"):("Não habilitado para tirar carteira de habilitação")}
        </>
    );
};

export default UserDetails;