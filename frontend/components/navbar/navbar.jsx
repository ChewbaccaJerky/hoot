import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => {
  return (
    <div className="session-links">
      <Link to="/login"><button>Log In</button></Link>
      <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  );
};

const greeting = (currentUser, logout) => (
  <div className="session-links">
    <h2> { currentUser.username } </h2>
    <button onClick={logout}> Log Out </button>
  </div>
);


const homepage = (currentUser, logout) => {
  let info = currentUser ? greeting(currentUser, logout) : sessionLinks();
  return (
    <div className="jumbotron">
      <div className="links-container">
        { info }
      </div>
      <h1 id="logo">Hoot</h1>
      <p>Johnny's Grill Photo By Diane Mariel</p>
    </div>
  );
};

const NavBar = ({currentUser, logout, path}) => {

  let content = path === "/" ? homepage(currentUser, logout) : "fails...";

  return (
    <div className="navbar-container">
      { content }
    </div>
  );
};

export default NavBar;
