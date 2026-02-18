import { useState } from 'react';
import idatImg from './assets/idat.jpg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div>
          <h1>Trabajando con Hosting y Dominio</h1>
          <h2>¡ Bienvenidos a mi web !</h2>
        </div>
        <img src={idatImg} className="base" width="170" height="179" alt="" />
      </section>
    </>
  );
}

export default App;
