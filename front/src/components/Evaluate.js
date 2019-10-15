import React from "react";
import { Button, Jumbotron, Container } from "react-bootstrap";

const Evaluate = props => {
  return (
    <div id="evaluate">
      <Jumbotron className="text-center">
        <Container>
          <h1>Evaluate Here</h1>
          <p className="eval-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Button variant="success" onClick={() => null}>
            Evaluate
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Evaluate;
