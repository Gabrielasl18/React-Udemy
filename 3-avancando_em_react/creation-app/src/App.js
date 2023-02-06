import './App.css';
import { useState } from 'react';
import City from "./assets/city.jpg";
import CarDetails from './components/CarDetails';
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {
  const name = "Gabriela";
  //const [userName] = useState("Joada");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km:3123 },
    { id: 2, brand: "BMW", color: "Prata", newCar: false, km:3435 },
    { id: 3, brand: "Gol", color: "Azul", newCar: true, km:7664 }
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
        <h1>Avançando em React</h1>
        {/* Imagem em public */}
        <div>
          <img src="/city.jpg" alt="Paisagem"/>
        </div>
        {/* Imagem em assets */}
        <div>
          <img src={City} alt="Cidade"/>
        </div>
        <ManageData />
        <ListRender />
        <CondicionalRender />
        {/* props */}
        <ShowUserName name={name}/>
        {/* destructuringg */}
        <CarDetails brand="VW" km={100000} color="Preto" newCar={false}/>
        <CarDetails brand="Fiat" km={8600} color="Prata" newCar={true}/>
        <CarDetails brand="Gol" km={4500} color="Azul" newCar={false}/>
        {/* loop em array */}
        {/**/}
        {cars.map((car) => (
          <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} />
        ))}
        {/* fragment */}
        <Fragment propFragment="teste"/>
        {/* children */}
        <Container myValue="testing">
          <p>E este é o conteúdo</p>
        </Container>
        {/* executar função */}
        <ExecuteFunction myFunction={showMessage} />
        {/* state lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
        {/* desafio 4 */}
        <UserDetails name="Aline" age={18} occupation="Recepcionista"/>
        <UserDetails name="Arthur" age={14} occupation="Jovem Aprendiz"/>
        <UserDetails name="Bianca" age={38} occupation="Programadora"/>
    </div>
  );
}

export default App;
