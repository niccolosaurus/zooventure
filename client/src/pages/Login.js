import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import background from "../paws.jpeg"
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="flex-row justify-center">
      <div>
        <div className="card" style={{height:"100vh" , display: "flex", alignItems: "center", justifyContent: 'start', backgroundImage: `url(${background})` }} >
          {/* <h4 style={{textAlign:'center', marginTop: "10px", marginBottom: '10px' ,borderRadius:"10px", color:"white"}}>Login to make a plan or <a href='/signup'>signup</a></h4> */}
        \
            {data ? (
                <div className="card-body">
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
              </div>
            ) : (
              <div className='card' style={{ display: "flex",marginTop: "60px", alignItems: "center", justifyContent: 'center', backgroundColor: 'rgba(52, 52, 52, 0.8)', borderRadius: "10px" }} >

                <form onSubmit={handleFormSubmit}>

                  <div className='card-header'>
                    <h4 style={{ textAlign: 'center', marginTop: "10px", marginBottom: '10px', borderRadius: "10px", color: "white" }}>Welcome back! Login to make a plan or <a href='/signup'>signup</a></h4>
                  </div>
                  <div style={{ margin: '10px' }} className='mb-3 from-group'>
                    <label style={{ color: 'white' }} for="email" class="form-label"><strong>Email address</strong></label>
                    <input
                      className="form-control"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div style={{ margin: '10px' }} className='mb-3 form-group'>
                    <label style={{ color: 'white' }} for="password" class="form-label"><strong>Password</strong></label>
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
                    className="btn btn-block btn-primary"
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

export default Login;
