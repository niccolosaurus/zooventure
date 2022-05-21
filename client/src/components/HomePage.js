import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Accordion, Tab, Tabs, Button } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              View our zoo map.
            </Card.Text>
            <Button variant="primary">Click for Map</Button>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              View our zoo map.
            </Card.Text>
            <Button variant="primary">Click for Map</Button>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card style={{ width: "30rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              View our zoo map.
            </Card.Text>
            <Button variant="primary">Click for Map</Button>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
}

export default HomePage;
