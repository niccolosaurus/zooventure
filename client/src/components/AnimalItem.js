import React from "react";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Accordion, Tab, Tabs, Button } from 'react-bootstrap';
import "./Accordion.css";
import { ADD_PLAN} from "../utils/mutations"
import {useMutation, useQuery} from '@apollo/client'



function AnimalItem(props) {
  //Define Variables
  const {
    _id,
    description,
    name,
    funFact,
    img,
    animal,

  } = props

  const [addPlan, {data, error}] = useMutation(ADD_PLAN);
  
  const revisedAnimal = {
    _id: animal._id,
    name: animal.name,
    coord: animal.coord,
    // Lat: parseFloat(animal.Lat),
    // Lon: parseFloat(animal.Lon),
    Lat: animal.Lat,
    Lon: animal.Lon,
    description: animal.description,
    img: animal.img,
    funFact: animal.funFact
  }

// console.log({error})

// const { data } = await addOrder({ variables: { animals } });
console.log({data})

  return (
    
    
      <Card key={_id} variant="success"  style={{ border: " 10px solid #563e01", backgroundColor: "#ebb905", width: "20rem", margin: "20px" }}>
        <img style={{ border: " 10px solid #edac02", alignContent: "left" }} src={img} />
        <Card.Body>
          <Card.Title style={{ fontSize: "25px", textDecoration: "underline", textAlign: "center" }}>

            {name}
          </Card.Title>
          <hr></hr>

          <Col>
            <>

              <Accordion variant="warning" style={{ backgroundColor: "#b58404" }} flush>
                <Accordion.Item eventKey="0" style={{ backgroundColor: "#b58404" }}>
                  <Accordion.Header variant="warning" style={{ backgroundColor: "#b58404" }}>Description</Accordion.Header>
                  <Accordion.Body >
                    {description}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item style={{ backgroundColor: "#b58404" }} eventKey="1">
                  <Accordion.Header style={{ backgroundColor: "#b58404" }}>Fun Facts</Accordion.Header>
                  <Accordion.Body>
                    {funFact}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

            </>
          </Col>
          <Col>
            <>
            </>
          </Col>
          <Col>

          </Col>

        </Card.Body>
        <Card.Footer style={{ textAlign: "center" }}>
          <Button size="lg" variant="warning" id="add-plan" onClick={() => addPlan({ variables: { animals: revisedAnimal._id } })}>Add Animal to Plan</Button>
        </Card.Footer>
      </Card>

   

  );
}

export default AnimalItem;