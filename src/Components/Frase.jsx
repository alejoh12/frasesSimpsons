import { Card } from "react-bootstrap";

const Frase = () => {
  return (
    <main className="my-2 p-2 bg-transparent">
      <Card className=" bg-transparent border-0">
        <Card.Header className="h1">Nelson Muntz</Card.Header>
        <div className="text-center">
          <Card.Img
            variant="top"
            src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
            alt="Foto del dueño de la frase."
            className="imgCard"
          ></Card.Img>
        </div>
        <Card.Text className="bg-light my-3 p-2 fs-4">
          Shoplifting is a victimless crime, like punching someone in the dark.
          <br />
          <i className="text-secondary h-6 text-wrap fs-5 p-0 m-0">
            - Nelson Muntz in The Simpsons
          </i>
        </Card.Text>
      </Card>
    </main>
  );
};

export default Frase;
