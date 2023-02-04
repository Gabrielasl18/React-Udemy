const TemplateExpressions = () => {
    const name = prompt('diga seu nome');
    const data = {
        age:31,
        job:"Programmer",
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>{4+4}</p>
            <p>{console.log('opaaa')}</p>
        </div>
    );
}

export default TemplateExpressions