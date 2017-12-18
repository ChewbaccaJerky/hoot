import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import SearchBarContainer from '../searchbar/searchbar_container';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

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
        <div className="navbar-search">
          <a href="#"><h1 id="logo"> Hoot </h1></a>
          <SearchBarContainer />
          <p>Search and Explore</p>
        </div>
        <Footer />
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
    </div>
  );
};

/**************************************************/
/****************** NavBar ************************/
/**************************************************/

const NavBar = ({currentUser, logout, path}) => {

  let content = path === "/" ? homepage(currentUser, logout) : businessPages(currentUser, logout);
  
  return (
    <div className="navbar-container">
      { content }
    </div>
  );
};

export default NavBar;

