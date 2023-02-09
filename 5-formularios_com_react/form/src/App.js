import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{
        name: "Gabi",
        email: "Gabriela.lacerda2003@outlook.com",
        bio: "Programadora",
        role: "adm",
       }}/>
    </div>
  );
}

export default App;
