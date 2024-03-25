import React from "react";
import { ButtonGroup, Card, Container } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import * as Icon from "react-bootstrap-icons";
const CurrentProductPage = () => {
  const priceOld = {
    textDecorationLine: "line-through",
    color: "#faaaa",
  };
  return (
    <>
      <Container className="my-3">
        <Card className="border-0 position-relative flex-row">
          <img
            className="shadow"
            src=""
            alt="creentImg"
            height="500px"
            width="400"
          />
          <Card.Body className="w-50 text-left mt-5">
            <Card.Title>product1</Card.Title>
            <ReactStars
              count={6}
              size={24}
              color="grey"
              ally={true}
              edit={true}
              idHalf="true"
              // value={currentItem.rating}
              activeColor="#ffd700"
            />
            <hr></hr>
            <Card.Text>32.65$</Card.Text>
            <Card.Text style={priceOld}>429</Card.Text>
            <hr></hr>
            <Card.Text>
              I am an LLM trained to respond in a subset of languages at this
              time, so I can't assist you with that. Please refer to the Gemini
              Help Center for the current list of supported languages.
            </Card.Text>
            <ButtonGroup
              className="mt-5 d-flex justify-content-center mb-3
            position-absolute btnGroup
            "
            >
              <button
                variant="dark"
                className="wish me-3"
                size="sm"
                /*id={currentItem.name}*/
              >
                <Icon.Heart className="shadow text-dark" /*color={ }*/ />
              </button>
              <button variant="dark" className="wish me-3" size="sm">
                Add to Cart
              </button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CurrentProductPage;
