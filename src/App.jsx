import { useState } from "react";
import Card from "./components/Card";
import './App.css'

function App() {
  const [user, setUser] = useState({ nombre: "", password: "" });
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleName = (event) => {
    setUser({ ...user, nombre: event.target.value });
  };

  const handlePassword = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.nombre.trim().length < 3 ||
      user.nombre.startsWith(" ") ||
      user.password.length < 6
    ) {
      setError(true);
      setShowCard(false);
    } else {
      setShowCard(true);
      setError(false);
    }
  };

  return (
    <div className="app">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre: 
          <input type="text" value={user.nombre} onChange={handleName} placeholder="Ingrese su nombre" />
        </label>
        <br />
        <label>
          Password: 
          <input type="text" value={user.password} onChange={handlePassword} placeholder="Ingrese su password"/>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <br />
      {error && <h5 style={{color:"red"}}>Por favor chequea que la información sea correcta</h5>}
      {showCard && <Card user={user} />}
    </div>
  );
}

export default App;
