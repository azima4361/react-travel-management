// src/components/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/login.css';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Login = ({ setUser }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // To navigate to the home page after login

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error messages

    try {
      const response = await axios.post('http://localhost:5000/api/login', credentials);
      const {user,token}= response.data;
      setUser(user);
      // On successful login
      alert('Login successful!');
      localStorage.setItem('token', response.data.token); // Store token in local storage
      setUser(response.data.user); // Set the logged-in user globally
      navigate('/home'); // Redirect to home page
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.message || 'Login failed!');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login_form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary_btn auth_btn" type="submit">
                    Login
                  </Button>
                </Form>
                {error && <p className="error">{error}</p>}
                <p>
                  Don't have an account? <Link to="/register">Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;