import { Card } from "react-bootstrap";

const Frase = ({personaje}) => {
  return (
    <main className="my-2 p-2 bg-transparent">
      <Card className=" bg-transparent border-0">
        <Card.Header className="h1">{personaje.character}</Card.Header>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={personaje.image}
            alt={personaje.character}
            className="imgCard"
          ></Card.Img>
        </div>
        <Card.Text className="bg-light my-3 p-2 fs-4">
          {personaje.quote}
          <br />
          <i className="text-secondary h-6 text-wrap fs-5 p-0 m-0">
            - {personaje.character} in The Simpsons
          </i>
        </Card.Text>
      </Card>
    </main>
  );
};

export default Frase;
