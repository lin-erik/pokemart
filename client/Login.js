import React from 'react';
import { Form, FormControl, FormGroup, Col, Button } from 'react-bootstrap';

import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

const Login = (props) => {
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
              {/* <Button onClick={ (e) => {return this.handleClick() }}>Sign in</Button> */}

              <Link to='/home'>
              <Button onClick={ () => { return props.handleLogin() }}>Sign in</Button>
              </Link>
              
            </Col>
          </FormGroup>
        </Form>
      </div>
  )
}

// class Login extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {}
  // }

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

//   render() {
//     return(
//       <div>
//         <Form horizontal>
//           <FormGroup controlId='formUsername'>
//             <Col sm={2}>
//               Username
//             </Col>
//             <Col sm={10}>
//               <FormControl onChange={ (e) => {props.handleUserChange(e) }} placeholder='Username' />
//             </Col>
//           </FormGroup>

//           <FormGroup controlId='formPassword'>
//             <Col sm={2}>
//               Password
//             </Col>
//             <Col sm={10}>
//               <FormControl onChange={ (e) => {props.handlePasswordChange(e) }} type='password' placeholder='Password' />
//             </Col>
//           </FormGroup>

//           <FormGroup>
//             <Col smOffset={2} sm={10}>
//               {/* <Button onClick={ (e) => {return this.handleClick() }}>Sign in</Button> */}
//                 <Link to='home'>
//                   <Button>Sign in</Button>
//                 </Link>
//             </Col>
//           </FormGroup>
//         </Form>
//       </div>
//     )
//   }

// }

export default Login;