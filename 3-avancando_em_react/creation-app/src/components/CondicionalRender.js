import { useState } from "react";


const CondicionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Juju");

    return(
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso!</p>}
            {name === "Gabi" ? (
                <div>
                    <p>O nome é Gabi</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}
            <button onClick={() => setName("Gabi")}>Clica aqui</button>
        </div>
    );

    
};

export default CondicionalRender;