import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import SearchBarContainer from '../searchbar/searchbar_container';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      form: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.modal = this.modal.bind(this);
  }

  handleClick(e) {
    this.setState({
      isModalOpen: true,
      form: e.target.textContent
    });
  }

  handleMenuClick(e) {
    const links = document.querySelector('.session-links');
    const searchbar = document.querySelector('.business-search');
    const navbar = document.querySelector('.navbar-top');
    if(links.style.display === "") {
      links.style.display = "flex";
      searchbar.style.display = "flex";
      navbar.style.position = "absolute";
      navbar.style.zIndex = "1";
    }
    else {
      links.style.display = "";
      searchbar.style.display = "";
      navbar.style.position = "";
      navbar.style.zIndex = "";
    }
    
  }

  sessionLinks() {
    return(
      <div className="session-links">
        <button onClick={this.handleClick}>Log In</button>
        <button onClick={this.handleClick}>Sign Up</button>
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
          <div className="icon-container">
            <Link to="/"><h1 id="logo"> Hoot </h1></Link>
            <img 
              onClick={this.handleMenuClick}
              className="menu-icon" 
              src="https://blog.trymyui.com/wp-content/uploads/2016/01/Hamburger-Menu-icon.png" />
          </div>
          <div className="SearchBar business-search">
            <SearchBarContainer />
          </div>
          { info }
        </div>
      </div>
    );
  }

  closeModal(){
    this.setState({
      isModalOpen: false
    });
  }

  modal() {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        contentLabel="Session Form"
        style={customStyles}
      >
        <button onClick={this.closeModal}>X</button>
        <SessionFormContainer formType={this.state.form} closeModal={this.closeModal}/>
      </Modal>
    );
  }

  render() {
    let content = this.props.path === "/" ? this.homepage() : this.businessPages();
    if(this.props.loggedIn && this.state.isModalOpen) {
      this.closeModal();
    }
    return (
      <div className="navbar-container">
        { content }
        {this.modal()}
      </div>
    );
  }
}

const customStyles = {
  overlay: {
    backgroundColor : 'rgba(255, 255, 255, 0.3)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default NavBar;

