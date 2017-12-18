import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import SearchBarContainer from '../searchbar/searchbar_container';
import Modal from 'react-modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks() {
    return (
      <div className="session-links">
        <Link to="/login"><button>Log In</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    );
  }

  greeting() {
    return (
      <div className="session-links">
        <h2> { this.props.currentUser.username } </h2>
        <button onClick={this.props.logout}> Log Out </button>
      </div>
    );
  } 

  homepage() {
  let info = this.props.currentUser ? this.greeting() : this.sessionLinks();
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
}

 businessPages() {
    let info = this.props.currentUser ? this.greeting() : this.sessionLinks();

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
  }

  render() {
    let content = this.props.path === "/" ? this.homepage() : this.businessPages();
  
    return (
      <div className="navbar-container">
        { content }
      </div>
    );
  }
}

export default NavBar;

