import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Accordion, Tab, Tabs, Button } from 'react-bootstrap';
import logo from '../logo.svg';
import background from "../paws.jpeg";
import animalCoord from "../data/animalCoord.json";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import 'bootstrap/dist/css/bootstrap.css';
import "./Accordion.css";
import { ADD_ANIMAL } from "../utils/actions"
import { STATES } from "mongoose";


function AnimalCard() {
    const animals = animalCoord;
    const [key, setKey] = useState('');
    // const [addPlan, {error}] = useMutation(ADD_PLAN, {
    //     update(cache, {data: {}})
    // })
    const [state, dispatch] = useStoreContext();

    const {
        _id,
        name,
        coord,
        Lat,
        Lon,
        description,
        img,
        funFact
    } = animals;

    const { plan } = state
    
    const addAnimalToPlan = () => {
        const animalInPlan = plan.find((planAnimal) => planAnimal._id === _id)
        if (animalInPlan) {
            dispatch({
                type: ADD_ANIMAL,
                animal: { ...animals }
            })
        }
    }

    return (

        <div className="Container" style={{ backgroundImage: `url(${background})`, display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: 'center' }}>
            {animals.map((animal) => (
                <Card variant="success" key={animal._id} style={{ backgroundColor: "#b58404", width: "20rem", margin: "20px" }}>
                    <Card.Img style={{ alignContent: "left" }} src={animal.img} />
                    <Card.Body>
                        <Card.Title>
                            {animal.name}
                        </Card.Title>

                        <Col>
                            <>


                


                                <Accordion variant="warning" style={{ backgroundColor: "#b58404" }} flush>
                                    <Accordion.Item eventKey="0" style={{backgroundColor: "#b58404"}}>
    <AccordionHeader variant="warning" style={{backgroundColor: "#b58404"}}>Description</AccordionHeader>
    <Accordion.Body >
      {animal.description}
    </Accordion.Body>
  </Accordion.Item> 
                                    <Accordion.Item style={{ backgroundColor: "#b58404" }} eventKey="1">
                                        <Accordion.Header style={{ backgroundColor: "#b58404" }} r>Fun Facts</Accordion.Header>
                                        <Accordion.Body>
                                            {animal.funFact}
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
                        <Button size="lg" variant="warning" id="add-plan">Add Animal to Plan</Button>
                    </Card.Footer>

                </Card>
            ))}
        </div>






    )
}
export default AnimalCard