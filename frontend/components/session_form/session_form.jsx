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
    let errors = "";

    if(this.props.errors.responseJSON) {
      let err = this.props.errors.responseJSON[0];
      errors = (<h3 className="errors"> {err} </h3>)
    }

    return (
        <form>
          <h1>Log In</h1>
          {errors}
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
          <Link to="/signup">don't have a profile?</Link>
        </form>
    );
  }

  signupForm() {
    let err = {};

    if(this.props.errors.responseJSON) {
      err = this.handleErrors(this.props.errors.responseJSON);
    }

    return (
        <form onSubmit={this.handleSubmit} className="col-4">
          <h1>Sign Up</h1>

          <div className="name">
            <input type="text"
                   placeholder={ err["first_name"] ? err["first_name"] : "First Name"}
                   value={this.state.first_name}
                   onChange={this.update('first_name')}/>

            <input type="text"
                   placeholder={ err["last_name"] ? err["last_name"] : "Last Name"}
                   value={this.state.last_name}
                   onChange={this.update('last_name')}/>
          </div>

          <input type="text"
                 placeholder={ err["username"] ? err["username"] : "Username"}
                 value={this.state.username}
                 onChange={this.update('username')}/>

         <input type="text"
                placeholder={ err["email"] ? err["email"] : "Email"}
                value={this.state.email}
                onChange={this.update('email')}/>

          <input type="password"
                 placeholder={ err["password"] ? err["password"] : "Password"}
                 value={this.state.password}
                 onChange={this.update('password')}/>


          <button type="submit">Sign Up</button>
          <Link to="/login">already have a username?</Link>
        </form>
    );
  }

  handleErrors(errsArray) {
    let errorsHash = {};
    let errorStr = ""
    for (var i = 0; i < errsArray.length; i++) {
      errorStr = errsArray[i];

      switch(true) {
        case /First/.test(errorStr):
          errorsHash["first_name"] = errorStr;
          break;
        case /Last/.test(errorStr):
          errorsHash["last_name"] = errorStr;
          break;
        case /Username/.test(errorStr):
          errorsHash["username"] = errorStr;
          break;
        case /Password/.test(errorStr):
          errorsHash["password"] = errorStr;
          break;
        case /Email/.test(errorStr):
          errorsHash["email"] = errorStr;
          break;
      }
    }
    return errorsHash;
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
