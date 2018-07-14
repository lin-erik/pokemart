import React from 'react';
import { Form, FormControl, FormGroup, Col, Button } from 'react-bootstrap';

const Signup = (props) => {
  return(
      <div>
        <Form horizontal>
          <FormGroup controlId='formUsername'>
            <Col sm={2}>
              Username
            </Col>
            <Col sm={10}>
              <FormControl onChange={ (e) => {props.handleUserChange(e) }} placeholder='Username' />
            </Col>
          </FormGroup>

          <FormGroup controlId='formPassword'>
            <Col sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl onChange={ (e) => {props.handlePasswordChange(e) }} type='password' placeholder='Password' />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={ () => { return props.handleSignup() }}>Sign up</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
  )
}

export default Signup;