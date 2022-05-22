import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Row, Col, Accordion, Tab, Tabs, Button } from 'react-bootstrap';
const MyAnimalList = (input) => {
 

  const {
    _id,
    description,
    name,
    funFact,
    img,

  } = input

  
  return (
    <div className="animalList">
    <Card key={_id} variant="success"  style={{ border: " 10px solid #563e01", backgroundColor: "#ebb905", width: "300px", margin: "20px" }}>
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
         
         <Card.Footer style={{ padding: "0px",margin: "0px" , textAlign: "center" }}>
           <Button style={{borderRadius: "0px"  ,height: "100%", width: "100%"}} href='' type='click' size="lg" variant="warning" id="add-plan">Remove Animal from plan</Button>
         </Card.Footer> 
      </Card>
    </div>
  );
};

export default MyAnimalList;
