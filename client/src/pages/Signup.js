import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import background from "../paws.jpeg"
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import Header from '../components/Header';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center">
      <div >
        <div className="card" style={{ display: "flex", alignItems: "center", height: "100vh",justifyContent: 'start',backgroundImage: `url(${background})` }} >
          <Header/>
          {/* <h4  style={{margin: '10px' ,borderRadius:"10px"}}  className="card-header bg-dark text-light p-2" >Sign up to begin your adventure or <a href='/login'>login</a></h4> */}
          {/* <div style={{ height: "100vh" }} className="card-body"> */}
            {data ? (
                <div className="card-body">
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
               </div>
            ) : (
              <div className='card' style={{  marginTop: "80px", display: "flex", alignItems: "center", justifyContent: 'center',backgroundColor: 'rgba(52, 52, 52, 0.8)', borderRadius: "10px" }} >

                <form onSubmit={handleFormSubmit}>

                  <div className='card-header'>
                    <h4 style={{ textAlign: 'center', margin: "10px", borderRadius: "10px", color: "white" }} >Signup to begin planning your day or <a href='/login'>login</a></h4>
                  </div>
                  <div style={{ margin: '10px' }} className="mb-3 form-group">
                    <label style={{ color: 'white' }} htmlFor="name" className="form-label"><strong>Username</strong></label>
                    <input
                      className="form-control"
                      placeholder="Your username"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ margin: '10px' }} className="mb-3 form-group">
                    <label style={{ color: 'white' }} htmlFor="email" className="form-label"><strong>Email address </strong></label>
                    <input
                      className="form-control"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ margin: '10px' }} className="mb-3 form-group">
                    <label style={{ color: 'white' }} htmlFor="password" className="form-label"><strong>Password</strong></label>

                    <input
                      className="form-control"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    className="btn btn-primary"
                    style={{ cursor: 'pointer', margin: '10px' }}
                    type="submit"
                  >
                    <strong>Submit</strong>
                  </button>

                </form>
              </div>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
         
        </div>
      </div>
    </main>
  );
};

export default Signup;
