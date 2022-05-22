import React from "react";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Accordion, Tab, Tabs, Button } from 'react-bootstrap';
import { QUERY_USER, QUERY_USERS } from "../utils/queries";
import MyAnimalList from "./MyAnimalList";
import { useQuery } from '@apollo/client'
import background from "../paws.jpeg";
import MyZooMap from "./MyZooMap";

function UserInfo() {
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
        console.log('user', data.user)
        user = data.user;
    }
    return (
        // <div>
        //  hello world {console.log(data)}
        // </div>

        <>
         
            {user ? (
                <>
                    <Card style={{borderRadius: "0px", backgroundColor: "#CA965C", width: "100%" }}>
                        <Card.Header style={{borderBottom: "3px solid black" ,width: "100%" ,color: "black", fontSize: "60px" ,textAlign: "center", fontWeight: "60px" }}>
                          Welcome {user.username}
                        </Card.Header>
                        <Card.Body>
                        
                            <div  style={{marginBottom: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: 'center'}}>
                            <MyZooMap/>
                            </div>
                        <div style={{backgroundColor: "#EEC373", display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: 'center', width: '100%'}}>
                            <Card.Header style={{borderRadius: "0px" , width: "100%", color: "black", fontWeight: "10px", fontSize: "20px" ,textAlign: "left"}}>Animals left to see</Card.Header>

                            
                                {user.plans.map((plan) => (
                                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: 'center',}} >
                                        {plan.animals.map((animal) => (
                                            <MyAnimalList
                                                _id={animal._id}
                                                img={animal.img}
                                                name={animal.name}
                                                description={animal.description}
                                                funFact={animal.funFact}
                                            />

                                        ))}
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </>
            ) : <div> hello world </div>}
        </>

    )
}

export default UserInfo