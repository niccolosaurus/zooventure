import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Row, Col} from 'react-bootstrap'
import logo from '../logo.svg'

function AnimalCard(props) {
    
    return(

        <div className="container" style={{display: "flex", justifyContent: "center", alignContent:'center', flexWrap: "wrap", flexDirection: "row" }}>
        {props.animals.map((animal) => (
        <Card style={{color: "#000", width: "20rem"}}>
        <Card.Img src={animal.img} /> 
        <Card.Body>
        <Card.Title>
       AnimalCard {animal.url}
      </Card.Title>
      <Row>
        <Col>
        <Card.Text>
       Details about animal{animal.description}
        </Card.Text> 
        </Col>
        <Col>
        <Card.Text>
       <button>Add Animal</button> 
        </Card.Text>
        </Col> 
        </Row>
        </Card.Body>

        
        </Card>
        ))}
        </div>

    )
        }
export default AnimalCard