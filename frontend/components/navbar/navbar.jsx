import React from 'react';
import { Link } from 'react-router-dom';
import SearchBarContainer from '../searchbar/searchbar_container';

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
      <div className="jumbotron-items" >
        <div className="links-container">
          { info }
        </div>
        <div>
          <Link to="/"><h1 id="logo"> Hoot </h1></Link>
          <SearchBarContainer />
        </div>
        <p>Johnny's Grill Photo By Diane Mariel</p>
      </div>
    </div>
  );
};

const businessPages = (currentUser, logout) => {
  let info = currentUser ? greeting(currentUser, logout) : sessionLinks();

  return (
    <div className="navbar">
      <div className="navbar-top">
        <Link to="/"><h1 id="logo"> Hoot </h1></Link>
        <div className="SearchBar">
          <SearchBarContainer />
        </div>
        { info }
      </div>

      <div className="navbar-bottom">
        <ul>
          <li><a href='/'>Restaurants</a></li>
          <li><a href='/'>Night Life</a></li>
          <li><a href='/'>Write A Review</a></li>
        </ul>
      </div>
    </div>
  );
};

const NavBar = ({currentUser, logout, path}) => {

  let content = path === "/" ? homepage(currentUser, logout) : businessPages(currentUser, logout);

  return (
    <div className="navbar-container">
      { content }
    </div>
  );
};

export default NavBar;
