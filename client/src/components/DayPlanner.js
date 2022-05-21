import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Row, Col, ListGroup, Button, ListGroupItem,} from 'react-bootstrap'
import { Data } from "@react-google-maps/api"
import { QUERY_ANIMALS, QUERY_USERS } from "../utils/queries";
import {useQuery} from '@apollo/client'


function DayPlanner () {
    const { data, loading, error } = useQuery(QUERY_ANIMALS);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (

        <div style={{width: "300px", }}>
          
           <ListGroup >
               {console.log(data)}
            
           {data.animals.map((animal) => (
                     <Card key={animal._id} style={{borderRight: " 3px solid #013b10" ,borderLeft: " 3px solid #013b10",borderBottom: " 1.5px solid #013b10",borderTop: " 1.5px solid #013b10",
                     justifiyContent: "center", alignItems: "center" ,backgroundColor: " rgb(14, 99, 41, .8)"}}>
                         
                         <Row>
                            <Col xs={3}>
                         <Card.Img style={{borderRight: " 3px solid #013b10",height:"100%" }}  src={animal.img}/>
                         </Col>
                         <Col style={{justifiyContent: "center", alignItems: "center"}} xs={5}>
                         <Card.Text style={{ height: "100%", justifyContent: "center", alignItemss: 'center'}} ><strong>{animal.name}</strong></Card.Text>
                         </Col>
                         <Col xs={4}>
                         <Button style={{height: "100%"}} variant="success">
                             Visited!
                         </Button>
                         </Col>
                      
                         

                         </Row>
                         
                       
                         
                      
                     </Card>
               ))}

     </ListGroup>
        </div>
    )

}
 export default DayPlanner