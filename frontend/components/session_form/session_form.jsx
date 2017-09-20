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
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(e) {
    e.preventDefault;
    let user = { username: "Demo", password: "password"};
    this.props.processForm({user: user});
  }

  loginForm() {
    return (
        <form>
          <h1>Log In</h1>
          <input type="text"
                 placeholder="Username"
                 value={this.state.username}
                 onChange={this.update('username')}/>

          <input type="password"
                 placeholder="Password"
                 value={this.state.password}
                 onChange={this.update('password')}/>

          <div className="login-btns">
            <button type="submit" onClick={this.handleSubmit}>Log In</button>
            <button onClick={this.demoLogin}>Demo</button>
          </div>

        </form>
    );
  }

  signupForm() {
    return (
        <form onSubmit={this.handleSubmit} className="col-4">
          <h1>Sign Up</h1>

          <div className="name">
            <input type="text"
                   placeholder="First Name"
                   value={this.state.first_name}
                   onChange={this.update('first_name')}/>

            <input type="text"
                   placeholder="Last Name"
                   value={this.state.last_name}
                   onChange={this.update('last_name')}/>
          </div>

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

          <button type="submit">Sign Up</button>
        </form>
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
