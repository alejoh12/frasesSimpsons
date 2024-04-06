import { Button, Container, Spinner } from "react-bootstrap";
import "./App.css";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import Frase from "./Components/Frase";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarFrase, setMostrarFrase] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setMostrarFrase(false);
    // Petición=Solicitud=Request
    // https://thesimpsonsquoteapi.glitch.me/quotes
    try {
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      setPersonaje(dato[0]);
      setMostrarFrase(true);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComponente = mostrarFrase ? (
    <Frase personaje={personaje}></Frase>
  ) : (
    <div>
      <Spinner animation="grow" variant="warning" />
    </div>
  );

  return (
    <>
      <Container className="mainPage text-center">
        <img src={logo} alt="Logo de los Simpsons" className="imgLogo my-4" />
        {mostrarComponente}
        <Button variant="warning" className="mt-2 mb-5" onClick={consultarAPI}>
          Obtener Frase
        </Button>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
