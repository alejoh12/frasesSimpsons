import { Button, Container } from "react-bootstrap";
import "./App.css";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import Frase from "./Components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(()=>{
    consultarAPI();
  },[])

  const consultarAPI = async() => {
    // Petición=Solicitud=Request
    // https://thesimpsonsquoteapi.glitch.me/quotes
    const respuesta = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const dato = await respuesta.json();
    console.log(respuesta)
    console.log(dato)
    setPersonaje(dato[0]);
  }

  return (
    <>
      <Container className="mainPage text-center">
        <img src={logo} alt="Logo de los Simpsons" className="imgLogo my-4" />
        <Frase></Frase>
        <Button variant="warning" className="mt-2 mb-5">Obtener Frase</Button>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
