import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Accordion, Tab, Tabs, Button } from "react-bootstrap";
import logo from "../logo.svg";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import "bootstrap/dist/css/bootstrap.css";
import "./Accordion.css";
import { QUERY_ANIMALS } from "../utils/queries";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PLAN } from "../utils/mutations";

function AnimalCard(props) {
  const { _id, description, name, funFact, img, animal } = props;
  const { data, loading, err } = useQuery(QUERY_ANIMALS);
  const [addPlan] = useMutation(ADD_PLAN);

  const revisedAnimal = {
    _id: animal._id,
    name: animal.name,
    coord: animal.coord,
    Lat: animal.Lat,
    Lon: animal.Lon,
    description: animal.description,
    img: animal.img,

    funFact: animal.funFact,
  };

  if (loading) return "Loading...";
  if (err) return <pre>{err.message}</pre>;

  return (
    <Card
      variant="success"
      key={_id}
      style={{ backgroundColor: "#b58404", width: "20rem", margin: "20px" }}
    >
      <Card.Img style={{ alignContent: "left" }} src={img} />
      <Card.Body style={{ backgroundColor: "#fcdb03" }}>
        <Card.Title>{name}</Card.Title>

        <Col>
          <>
            <Accordion
              variant="warning"
              style={{ backgroundColor: "#b58404" }}
              flush
            >
              <Accordion.Item
                eventKey="0"
                style={{ backgroundColor: "#b58404" }}
              >
                <AccordionHeader
                  variant="warning"
                  style={{ backgroundColor: "#b58404" }}
                >
                  Description
                </AccordionHeader>
                <Accordion.Body>{description}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                style={{ backgroundColor: "#b58404" }}
                eventKey="1"
              >
                <Accordion.Header style={{ backgroundColor: "#b58404" }}>
                  Fun Facts
                </Accordion.Header>
                <Accordion.Body>{funFact}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </>
        </Col>
        <Col>
          <></>
        </Col>
        <Col></Col>
      </Card.Body>
      <Card.Footer style={{ textAlign: "center" }}>
        <Button
          size="lg"
          variant="warning"
          id="add-plan"
          onClick={() => addPlan({ variables: { animals: revisedAnimal._id } })}
        >
          Add Animal to Plan
        </Button>
      </Card.Footer>
    </Card>
  );
}
export default AnimalCard;
