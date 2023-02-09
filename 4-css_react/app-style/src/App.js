import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
function App() {
  const n = 17;
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/* Inline CSS */}
      <p style={{ color: "red", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      
      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? {color: "purple"} : {color:"pink"}}>CSS dinâmico</h2>
      <h2 style={n > 10 ? {color: "purple"} : {color:"pink"}}>CSS dinâmico</h2>
      
      {/* Classe Dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
    
      {/* CSS Modules */}
      <Title />
      <h2 className="my-title">Testando</h2>

    </div>
  );
}

export default App;

/*  Frequente 

R$52  (vivo - internet)
R$25  (spotify - música)
R$400 (guardar)

*/


/*  1 vez só

R$50  (corte de cabelo)
R$400 (tênis)
R$367 (autoescola)

*/

/*  Parcelados


*/