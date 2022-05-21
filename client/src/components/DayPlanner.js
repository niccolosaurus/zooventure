import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Row, Col, ListGroup,} from 'react-bootstrap'
import { Data } from "@react-google-maps/api"
import { QUERY_ANIMALS, QUERY_USERS } from "../utils/queries";
import {useQuery} from '@apollo/client'
import {QUERY_USER} from "../utils/queries"

function DayPlanner () {
    const { data, loading, error } = useQuery(QUERY_ANIMALS);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>
    return (
        <div style={{width: "300px"}}>
           <ListGroup >
           {data.animals.map((animal) => (
                     <Card style={{backgroundColor: " rgb(14, 99, 41, .8)"}}>
                         
                         <Card.Header style={{textAlign: 'center'}}>{animal.name}</Card.Header>
                         
                      
                     </Card>
               ))}

     </ListGroup>
        </div>
    )

}
 export default DayPlanner