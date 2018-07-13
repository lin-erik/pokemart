import React from 'react';
import { Form, FormControl, FormGroup, Col, Button } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      password: '',
      login: false
    }
  }

  // handleClick() {
  //   var data = {
  //     user: this.state.user,
  //     password: this.state.password
  //   };

  //   fetch('http://localhost:8080/login', {
  //     method: 'POST',
  //     body: JSON.stringify(data)
  //   })
  //     .then(res => res.json())
  //     .catch(err => console.error('Error logging in', err))
  //     .then(response => {
  //       console.log(response);
  //     });
  // }

  handleUserChange(e) {
    this.setState({
      user: e.target.value
    });

    console.log('The current user', this.state.user);
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return(
      <div>
        <Form horizontal>
          <FormGroup controlId='formUsername'>
            <Col sm={2}>
              Username
            </Col>
            <Col sm={10}>
              <FormControl value={this.state.user} onChange={ (e) => {this.handleUserChange(e) }} placeholder='Username' />
            </Col>
          </FormGroup>

          <FormGroup controlId='formPassword'>
            <Col sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl value={this.state.password} onChange={ (e) => {this.handlePasswordChange(e) }} type='password' placeholder='Password' />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={ (e) => {return this.handleClick() }}>Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }

}

export default Login;