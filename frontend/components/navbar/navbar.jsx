import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = (path) => {
  path = path === "/login" ? "/signup" : "/login";
  let text = path === "/login" ? "Log In" : "Sign Up";
  return (
    <div className="nav-left">
      <button><Link to={path}>{text}</Link></button>
    </div>
  );
};

const greeting = (currentUser, logout) => (
  <div className="nav-left">
    <h2> { currentUser.username } </h2>
    <button onClick={logout}> Log Out </button>
  </div>
);

const NavBar = ({currentUser, logout, path}) => {
  let info = currentUser ? greeting(currentUser, logout) : sessionLinks(path);
  return (
    <div className="navbar">
      <h1>Hoot</h1>
    </div>
  );
};

export default NavBar;
