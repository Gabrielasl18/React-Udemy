import MyComponent from "./MyComponents";

const FirstComponent = () => {

    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    );

}

export default FirstComponent;