import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Tabs, Tab, Card, Row, Col, Container, Button } from 'react-bootstrap'
import UserInfo from "../components/UserInfo"
import MyZooMap from "../components/MyZooMap"
import { QUERY_USER, QUERY_USERS } from "../utils/queries";
import { CREATE_ANIMAL } from "../utils/mutations";
import { useQuery, useMutation } from '@apollo/client'
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
    const [dispatch] = useMutation(CREATE_ANIMAL, {
        variables: {
            name: formState.name,
            Lat: formState.Lat,
            Lon: formState.Lon,
            description: formState.description,
            img: formState.img,
            funFact: formState.funFact
        }
    });
    const parsedFormState = {...formState, Lon: parseFloat(formState.Lon), Lat: parseFloat(formState.Lat)}

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("before");
        dispatch({variables: parsedFormState})
    
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
                        <h4 style={{ borderBottom: "3px solid black", width: "100%", color: "white", fontSize: "60px", textAlign: "center", fontWeight: "60px" }}>Welcome to your profile page, {data.user.username}!</h4>
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
                                className="form-control"
                                onSubmit={handleFormSubmit}
                                style={{
                                    alignItems: "center",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <div className="mb-3">
                                <label for="name" class="form-label">Animal Name</label><br></br>
                                <input
                                    value={formState.name}
                                    placeholder="Animal name"
                                    name="name"
                                    onChange={handleChange} 
                                />
                                </div>
                                <div className="mb-3">
                                <label for="Lat" class="form-label">Latitude</label><br></br>
                                <input
                                    value={formState.Lat}
                                    placeholder="Latitude"
                                    name="Lat"
                                    onChange={handleChange}
                                />
                                </div>
                                <div className="mb-3">
                                <label for="Lon" class="form-label">Longitude</label><br></br>
                                <input
                                    value={formState.Lon}
                                    placeholder="Longitude"
                                    name="Lon"
                                    onChange={handleChange}
                                 />
                                </div>
                                <div className="mb-3">
                                <label for="description" class="form-label">Description</label><br></br>
                                <input
                                    value={formState.description}
                                    placeholder="Animal description"
                                    name="description"
                                    onChange={handleChange}
                                />
                                </div>
                                <div className="mb-3">
                                <label for="img" class="form-label">Image</label><br></br>
                                <input
                                    value={formState.img}
                                    placeholder="Image URL"
                                    name="img"
                                    onChange={handleChange}
                                />
                                </div>
                                <div className="mb-3">
                                <label for="funFact" class="form-label">Fun Fact</label><br></br>
                                <input
                                    value={formState.funFact}
                                    placeholder="Fun fact"
                                    name="funFact"
                                    onChange={handleChange}
                                />
                                </div>
                                <button className="btn btn-primary" style={{borderRadius: "0px"  ,height: "100%", width: "50%"}} href='' type='submit' size="lg" variant="warning" id="add-plan">Add Animal</button>

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