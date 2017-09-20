import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    if(props.location.pathname === "/login") {
      this.state = {username: "", password: ""};
    }
    else {
      this.state = {
                    username: "",
                    password: "",
                    email: "",
                    first_name: "",
                    last_name: ""
                  }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {user: this.state};
    this.props.processForm(user);
  }

  loginForm() {
    return (
      <div class="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Username"
                 value={this.state.username}
                 onChange={this.update('username')}/>
          <input type="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.update('password')}/>
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }

  signupForm() {
    return (
      <div class="form">
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 placeholder="Username"
                 value={this.state.username}
                 onChange={this.update('username')}/>

          <input type="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.update('password')}/>

          <input type="text"
                 placeholder="Email"
                 value={this.state.email}
                 onChange={this.update('email')}/>

          <input type="text"
                 placeholder="First Name"
                 value={this.state.first_name}
                 onChange={this.update('first_name')}/>

          <input type="text"
                 placeholder="Last Name"
                 value={this.state.last_name}
                 onChange={this.update('last_name')}/>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }

  render() {
    let form = this.props.formType === "login" ? this.loginForm() : this.signupForm();
    return (
      <div className="form-container">
          {form}
      </div>
    );
  }
}

export default withRouter(SessionForm);
