
import React, { useState, useContext } from 'react';
import {Container, Form, Button, FormGroup, Label, Collapse, Input, Row, Col, Card, CardBody, CardHeader, CardFooter} from "reactstrap";
import { UserContext } from '../context/UserContext';
import {Navigate} from "react-router-dom";  
import {toast} from "react-toastify";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const SignIn = () => {

  const context= useContext(UserContext);
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");

  // method (handleSignIn) to handle signup
  //firebase with some methods like .auth & another with we have passed state as email & pass
  // in then get email & pass from the setUser state and grab whole res object
  // pass callbaack in catch ( with err msg and toastify msg ) if signup failed
const handleSignIn=()=>{
  firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(res=>{
    console.log(res)
    context.setUser({ email: res.user.email, uid: res.user.uid})
    toast(` Welcome Back ${res.user.email}`, { type: "success" });
  })
  .catch(error=>{
    console.log(error);
    toast(error.message,{type:"error"})
  })
};

//method to actual SignUp
const handleSubmit= e =>{
  e.preventDefault()
  handleSignIn();
}

//if context.user having a unique id then redirect user to "/" else show the sign form
if(context.user?.uid){
  return <Navigate to="/" />
}

return (
  <Container className='text-center'>
    <Row>
      <Col lg={6} className='offset-lg-3 mt-5'>
        <Card>
          <Form onSubmit={handleSubmit}>
            <CardHeader className=''>SignIn here</CardHeader>
            <CardBody>
              <FormGroup row>
                <Label for='email' sm={3}>
                  Email
                </Label>
                <Col sm={9}>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='provide your email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for='password' sm={3}>
                  Password
                </Label>
                <Col sm={9}>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='your password here'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Col>
              </FormGroup>
            </CardBody>
            <CardFooter>
              <Button type='submit' block color='primary'>
                Sign In
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </Col>
    </Row>
  </Container>
);

};


export default SignIn;

