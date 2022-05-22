import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Accordion, Tab, Tabs, Button, Form } from "react-bootstrap";
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
// import { UPDATE_USER } from '../utils/mutations'
import React, { useState } from 'react';
import Auth from '../utils/auth';

function EditInfo () {  
    // const [formState, setFormState] = useState({ email: '', username: '' }); 

  
    // const [updateUser] = useMutation(UPDATE_USER);

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     const mutationResponse = await updateUser({
    //         variables: {
    //             email: formState.email,
    //             username: formState.username,

    //         }
    //     })
    //     const token = mutationResponse.data.updateUser.token;
    //     Auth.login(token);
    // }
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormState({
    //       ...formState,
    //       [name]: value,
    //     });
    //   };
    const { data } = useQuery(QUERY_USER);
    let user;

    if (data) {
       
        user = data.user;
    }

    return (
        
        <div style={{height: "100%", padding: "20px"}}>
        
            <Form  >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{fontSize: "20px", fontWeight: "20px"}}>Update email address</Form.Label>
    <Form.Control value={user.email} name="email" type="email" placeholder="Enter updated email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicUsername">
    <Form.Label>Update Username</Form.Label>
    <Form.Control value={user.username} name="username"   type="input" placeholder="Username" />
  </Form.Group>
  <Button variant="primary" type="submit"> 
    Submit
  </Button>
</Form>
            
        </div>
    )
}

export default EditInfo