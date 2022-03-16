import React from "react";
import Saludo from "./components/Saludo/Saludo";
import Menu from "./components/Menu/Menu";

// React.Fragment de la línea 12 y 22 es una ayuda que nos da React para empaquetar elementos hermanos si no hay otra alternativa en la maqueta. Sino, podemos usar una estructura html de la que ya conocemos.

function App() {

  let menuItems =[ "Home", "Contact us", "Products", "FAQs"];

  return (
    <React.Fragment> 
      <div className="wrapper">
        <Saludo nombre="Pedro"/>
        <header className="main-header">
          <Menu menuContent= { menuItems }/>
        </header>
      </div>
      <footer>
        <p>Pie de página</p>
      </footer>
    </React.Fragment>
  );
}

export default App;
