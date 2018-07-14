import React from 'react';
import ReactDOM from 'react-dom';
const script = require('./scripts/index.js');

import Login from './Login.js';
import Landing from './Landing.js';
import Signup from './Signup.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      password: '',
      login: false,
      userId: ''
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

      console.log('The current user', this.state.user);
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

      fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .catch(err => console.error('Error logging in', err))
        .then(response => {
          console.log('Log in response', response[0].id);

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

      fetch('http://localhost:8080/signup', {
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
      return(<Landing userId={this.state.userId} />)
    } else {
      return(
        <div>
          <Login handleUserChange={this.handleUserChange} handlePasswordChange={this.handlePasswordChange} handleLogin={this.handleLogin} login={this.state.login} />
          <Signup handleUserChange={this.handleUserChange} handlePasswordChange={this.handlePasswordChange} handleSignup={this.handleSignup} />
        </div>
      )
    }

    //   <Router>
    //     <div>
          {/* <Route path='/' exact render={() => ( */}
            // <Login handleUserChange={this.handleUserChange} handlePasswordChange={this.handlePasswordChange} handleLogin={this.handleLogin} login={this.state.login} />
          {/* )} /> */}

      //     <Landing

          
      //     <Route path='/home' component={Landing} />


      //   </div>
      // </Router>

    // );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));