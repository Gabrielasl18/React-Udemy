const Challenge = () => {
    const number1 = 8, number2 = 10;

    const handleSoma = () => {
        const number3 = number1 + number2;
        console.log(number3);
    };
    
    return(
        <div>
            <p>{number1}</p>
            <p>{number2}</p>
            <button onClick={handleSoma}>Somar</button>
        </div>
    );
};

export default Challenge;