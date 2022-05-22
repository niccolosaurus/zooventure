import React from "react"
import AnimalItem from "../components/AnimalItem"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Tabs, Tab, Card, Row, Col, Container} from 'react-bootstrap'
import UserInfo from "../components/UserInfo"
import MyZooMap from "../components/MyZooMap"
import { QUERY_USER, QUERY_USERS } from "../utils/queries";
import { useQuery } from '@apollo/client'
// import EditInfo from "../components/EditInfo"
import background from "../paws.jpeg";
function Profile () {
    const { data, loading, error } = useQuery(QUERY_USER);
    // let user;

    // if (data) {
    //     console.log('user', data.user)
    //     user = data.user;
    // }
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>;
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignContent: 'center',borderRadius: "0px", backgroundImage: `url(${background})`, width: "100%" }}>
            <Container >
                <Row>
                    <Col>
                   <h4 style={{borderBottom: "3px solid black" ,width: "100%" ,color: "white", fontSize: "60px" ,textAlign: "center", fontWeight: "60px" }}>Welcome to your profile page {data.user.username}!</h4>
                    </Col>
                </Row>
                <Row style={{justifyContent: "center", margin: "20px"}}> 
                <MyZooMap/>
                </Row>
                <Row>
                <UserInfo/>
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