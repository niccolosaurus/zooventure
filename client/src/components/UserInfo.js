import React from "react";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Accordion, Tab, Tabs, Button } from 'react-bootstrap';
import { QUERY_USER, QUERY_USERS } from "../utils/queries";
import AnimalItem from "./AnimalItem";
import { useQuery } from '@apollo/client'
import background from "../paws.jpeg";

function UserInfo() {
    const { data, error } = useQuery(QUERY_USER);
    let user;
console.log({error})
    if (data) {
        console.log('user', data.user)
        user = data.user;
    }
    return (
        // <div>
        //  hello world {console.log(data)}
        // </div>

        <>
            {console.log(user)}
            {user ? (
                <>
                    <Card style={{ backgroundImage: `url(${background})`, width: "100%" }}>
                        <Card.Header style={{color: "white", fontSize: "20px" ,textAlign: "center"}}>
                           {user.username}
                        </Card.Header>
                        <Card.Body>

                            <div>
                                {user.plans.map((plan) => (
                                    <div>
                                        {plan.animals.map((animal) => (
                                            <AnimalItem
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
            ) : <div> hello world {console.log(user)}</div>}
        </>

    )
}

export default UserInfo