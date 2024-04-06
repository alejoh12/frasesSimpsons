import { Button, Container } from "react-bootstrap";
import "./App.css";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";
import Frase from "./Components/Frase";

function App() {
  return (
    <>
      <Container className="mainPage text-center">
        <img src={logo} alt="Logo de los Simpsons" className="imgLogo my-4" />
        <Frase></Frase>
        <Button variant="warning">Obtener Frase</Button>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
