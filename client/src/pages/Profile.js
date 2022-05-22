import React, { useState } from "react"
import AnimalItem from "../components/AnimalItem"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Tabs, Tab, Card, Row, Col, Container, Button } from 'react-bootstrap'
import UserInfo from "../components/UserInfo"
import MyZooMap from "../components/MyZooMap"
import { QUERY_USER, QUERY_USERS } from "../utils/queries";
import { useQuery } from '@apollo/client'
import background from "../paws.jpeg";

function Profile() {
    const { data, loading, error } = useQuery(QUERY_USER);
    const [formState, setFormState] = useState({
        name: '',
        Lat: '',
        Lon: '',
        description: '',
        img: '',
        funFact: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {

    
        } catch (e) {
          console.error(e);
        }
    
        // clear form values
        setFormState({
            name: '',
            Lat: '',
            Lon: '',
            description: '',
            img: '',
            funFact: ''
        });
    }

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: 'center', borderRadius: "0px", backgroundImage: `url(${background})`, width: "100%" }}>
            <Container >
                {console.log(data)}
                {console.log(data.user.admin)}
                <Row>
                    <Col>
                        <h4 style={{ borderBottom: "3px solid black", width: "100%", color: "white", fontSize: "60px", textAlign: "center", fontWeight: "60px" }}>Welcome to your profile page {data.user.username}!</h4>
                    </Col>
                </Row>
                <Row style={{ justifyContent: "center", margin: "20px" }}>
                    {data.user.admin ? (
                        <Card style={{
                            border: " 10px solid #563e01", 
                            backgroundColor: "#ebb905",
                            width: "50%",
                            marginBottom: "10px"
                        }}>
                            <div style={{ textAlign: "center", marginTop: "5px"}}>
                            <h2>New Animal</h2>
                            <p>Please fill out the form below</p>
                            </div>
                            <Card.Body>
                            <form
                                className="form"
                                onSubmit={handleFormSubmit}
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <input
                                    value={formState.name}
                                    placeholder="Animal name"
                                    name="name"
                                    onChange={handleChange}
                                    style={{ margin: "5px 0 5px 0" }}
                                />
                                <input
                                    value={formState.Lat}
                                    placeholder="Latitude"
                                    name="Lat"
                                    onChange={handleChange}
                                    style={{ margin: "5px 0 5px 0" }}
                                />
                                <input
                                    value={formState.Lon}
                                    placeholder="Longitude"
                                    name="Lon"
                                    onChange={handleChange}
                                    style={{ margin: "5px 0 5px 0" }}
                                />
                                <input
                                    value={formState.description}
                                    placeholder="Animal description"
                                    name="description"
                                    onChange={handleChange}
                                    style={{ margin: "5px 0 5px 0" }}
                                />
                                <input
                                    value={formState.img}
                                    placeholder="Image URL"
                                    name="img"
                                    onChange={handleChange}
                                    style={{ margin: "5px 0 5px 0" }}
                                />
                                <input
                                    value={formState.funFact}
                                    placeholder="Fun fact"
                                    name="funFact"
                                    onChange={handleChange}
                                    style={{ margin: "5px 0 5px 0" }}
                                />
                                <Button style={{borderRadius: "0px"  ,height: "100%", width: "50%"}} href='' type='click' size="lg" variant="warning" id="add-plan">Add Animal</Button>

                            </form>
                            </Card.Body>
                        </Card>
                    ) : (
                        <></>
                    )}
                    <MyZooMap />
                </Row>
                <Row>
                    <UserInfo />
                </Row>
            </Container>







            {/* <Tabs style={{marginBottom: "0px" ,backgroundColor: "#CA965C", justifyContent: "end"}} defaultActiveKey="profile" id="uncontrolled-tab-example" className="">
  <Tab style={{marginBottom: "0px", backgroundColor: "#CA965C"}} eventKey="profile" title="Profile">
  <UserInfo/>
  </Tab>
  <Tab style={{marginBottom: "0px", backgroundColor: "#CA965C"}}  eventKey="edit" title="Edit Info">
   <EditInfo/>
  </Tab>
 
</Tabs> */}

        </div>
    )

}
export default Profile