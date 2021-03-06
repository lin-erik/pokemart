import React from 'react';
import ReactDOM from 'react-dom';
const script = require('./scripts/index.js');
import { Button, Collapse, Well } from 'react-bootstrap';

import Login from './components/Login.jsx';
import Landing from './components/Landing.jsx';
import Signup from './components/Signup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      password: '',
      login: false,
      userId: '',
      openLogin: false,
      signLogin: false
    }

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

    handleUserChange(e) {
      this.setState({
        user: e.target.value
      });
    }

    handlePasswordChange(e) {
      this.setState({
        password: e.target.value
      });
    }

    handleLogin() {
      var data = {
        user: this.state.user,
        password: this.state.password
      }

      fetch('/login', {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .catch(err => console.error('Error logging in', err))
        .then(response => {
          if (response[0].id) {
            this.setState({
              userId: response[0].id,
              login: true
            })
          }
        });
    }

    handleSignup() {
      var data = {
        user: this.state.user,
        password: this.state.password
      }

      fetch('/signup', {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .catch(err => console.error('Error logging in', err))
        .then( () => {
          this.handleLogin();
        });
    }

  render() {
    if (this.state.login) {
      return(<Landing userId={this.state.userId} user={this.state.user} />)
    } else {
      return(
        <div className='row'>
          <div className='col-md-6'>
            <Button onClick={() => this.setState({openLogin: !this.state.openLogin})}>
              Login
            </Button>

            <Collapse in={this.state.openLogin}>
              <Well>
                <Login handleUserChange={this.handleUserChange} handlePasswordChange={this.handlePasswordChange} handleLogin={this.handleLogin} login={this.state.login} />
              </Well>
            </Collapse>
          </div>

          <div className='col-md-6'>
            <Button onClick={() => this.setState({signLogin: !this.state.signLogin})}>
              Sign Up
            </Button>

            <Collapse in={this.state.signLogin}>
              <Well>
                <Signup handleUserChange={this.handleUserChange} handlePasswordChange={this.handlePasswordChange} handleSignup={this.handleSignup} />
              </Well>
            </Collapse>
          </div>
        </div>
      )
    }
  }
};

ReactDOM.render(<App />, document.getElementById('app'));