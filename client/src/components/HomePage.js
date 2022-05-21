import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Accordion, Tab, Tabs, Button } from "react-bootstrap";

function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        margin: "20px",
      }}
    >
      <div style={{ margin: "20px" }}>
        <Card style={{ width: "40rem", height: "40rem" }}>
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/assets/images/ZooMap.jpg"}
          />
          <Card.Body>
            <Card.Title>Zooventure Map</Card.Title>
            <Card.Text>View our zoo map.</Card.Text>
            <Button variant="primary">Click for Map</Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{ margin: "20px" }}>
        <Card style={{ width: "40rem", height: "40rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Zooventure Gift Shop</Card.Title>
            <Card.Text>View our zoo map.</Card.Text>
            <Button variant="primary">Click for Map</Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{ margin: "20px" }}>
        <Card style={{ width: "40rem", height: "40rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Zooventure AR</Card.Title>
            <Card.Text>View our zoo map.</Card.Text>
            <Button variant="primary">Click for Map</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
