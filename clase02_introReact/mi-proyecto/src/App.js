import './App.css';

function App() {
  let titulo = "Hola a todos";
  let nombres=["Ale", "Gabriel"];

  return (
    
    <ul>
      {nombres.map(nombre => nombre !== "Ale"? <li>{nombre}</li>:"")}
    </ul>
  );
}

export default App;
