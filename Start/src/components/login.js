import React from 'react';
import users from '../userInfo/users.json'

let axios = require('axios');
let pass
let user_id
let nextID
let userlist = users["users"]
let usernames = []

class Login extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        
    }
  }
  
  login (e) {
    e.preventDefault()
    alert("you're logged in");
  }

  signup (e) {
    e.preventDefault()
    alert("you're signed up");
  }
  render() {
    return (
      <div>
        <h2>Login:</h2>
        <br />
        <form onSubmit={this.login.bind(this)}>
          <input id="loginU" type="text" placeholder="Username" />
          <input id="loginP" type="text" placeholder="Password" />
          <input type="submit" value="Login"/>
        </form>

        <br />
        <h3>Or sign up for free:</h3>
        <br />
        <form onSubmit={this.signup.bind(this)}>
          <input id="signupU" type="text" placeholder="Username" />
          <input id="signupP" type="text" placeholder="Password" />
          <input type="submit" value="Sign Up"/>
        </form>
        
      </div>
    );
  }
}

export default Login;
