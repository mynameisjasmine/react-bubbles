import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [input, setInput] = useState({username: '', password: ''})

  const handleChange = event => {
    setInput({
    ...input,
    [event.target.name]: event.target.value
    })
  
  }


  const login = event => {
    event.preventDefault()
  
    axiosWithAuth()
    .post('/api/login', input)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      props.history.push('/private')
    })
    .catch(err => console.log(err.response))
  };

  if (localStorage.getItem('token')) {
    return <Redirect to='private' />
  }


  return (
    <>
  <h1 className="welcome">Welcome to the Bubble App!</h1>
  
  <form className="form" onSubmit={login}>
  <input 
  type='text'
  name='username'
  value={input.username}
  placeholder='...enter username'
  onChange={handleChange}
  />
  <input 
  type='password'
  name='password'
  value={input.password}
  placeholder='...enter password'
  onChange={handleChange}
  />
  <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
