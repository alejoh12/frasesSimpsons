import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logosimpson.png";

function App() {
  return (
    <>
      <Container className="mainPage">
        <img src={logo} alt="Logo de los Simpsons" />
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
